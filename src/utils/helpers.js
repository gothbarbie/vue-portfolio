// @flow

import type { TaxonomyName, TaxonomyNode, SelectedTaxonomies } from '../types'

const get = (prop: string) => (item: Object): mixed => item[prop]

// Filters
export const filterBy = (prop: string) => ({
  handle
}: TaxonomyNode): boolean => {
  return handle === prop
}

export const filterSelected = (list: Array<TaxonomyNode>) => (
  handle: string
) => {
  return list.filter(filterBy(handle))
}

// Concat
const concatArray = (prev: Array<mixed>, curr: Array<mixed>): Array<mixed> => {
  return prev.concat(curr)
}

const merge = (prev: Object, curr: Object): Object =>
  Object.assign({}, prev, curr)

const constructKeyValue = (key: string) => (value: any): Object => ({
  [key]: value
})

export const addProps = (props: Object = {}) => ({
  ...props,
  language: 'sv'
})

export const sortByName = (a: TaxonomyName, b: TaxonomyName): number => {
  return a.name.localeCompare(b.name, 'sv')
}

/**
 * Create a query string from the query in the Vuex store
 * @param {Object} state
 */
export const createQueryString = (state: Object) => {
  return Object.keys(state)
    .map(key => {
      const value = state[key]
      const keyValue = constructKeyValue(key)

      if (value === true || value === false) {
        return keyValue(value)
      }

      if (!value.length) {
        return null
      }

      if (typeof value === 'string') {
        return keyValue(value)
      }

      const query = value
        .map(inner => JSON.stringify(inner))
        .reduce(concatArray, [])
        .join(',')

      return keyValue(`[${query}]`)
    })
    .filter(Boolean)
    .map(arr => Object.keys(arr).map(key => `${key}=${arr[key]}`))
    .reduce(concatArray, [])
    .join('&')
}

/**
 * Converts $route query to a queryable object
 * @param {Object} query
 */
export const compileQuery = (query: Object) => {
  return Object.keys(query)
    .map(key => {
      const value = query[key]
      const keyValue = constructKeyValue(key)

      if (value === 'true') {
        return keyValue(value === 'true')
      }

      return keyValue(JSON.parse(value))
    })
    .reduce(merge, {})
}

const joinNames = (prev: TaxonomyName, curr: TaxonomyName): string => {
  return `${prev.name.length ? `${prev.name} -` : ''} ${curr.name}`.trim()
}

export const selectedItem = (input: SelectedTaxonomies) => {
  return input.reduce((prev, curr) => prev.concat(curr), []).reduce((
    prev,
    curr
  ) => ({
    name: joinNames(prev, curr),
    path: curr.path
  }), { name: '' })
}

export const unique = (item: TaxonomyNode, index: number, self: Object) => {
  return self.findIndex(t => t.handle === item.handle) === index
}

export const pick = (o: Object, props: Array<String>) => {
  return [
    ...props.map(prop => {
      if (prop.includes('.')) {
        const deep = prop.split('.')
        return o[deep[0]][deep[1]]
      }
      if (rework[prop]) {
        return rework[prop](o[prop])
      }
      return o[prop]
    })
  ].filter(Boolean)
}
