import { createQueryString } from '@/utils/helpers'

export const query = state => createQueryString(state.query)
