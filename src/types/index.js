// @flow

export type TaxonomyNode = {
  handle: string,
  id: string,
  name: string,
  path: string,
  ranking?: number,
  type: string
}

export type TaxonomyName = {
  name: string
}

export type SelectedTaxonomies = Array<Array<TaxonomyNode>>

export type Recently = {
  title: string,
  content: string,
  createdAt: Date
}

export type Experience = {
  title: string,
  content: string,
  createdAd: Date
}
