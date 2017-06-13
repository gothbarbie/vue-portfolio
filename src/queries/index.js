import RECENTLIES from '@/queries/recentlies.graphql'
import EXPERIENCES from '@/queries/experiences.graphql'
import { addProps } from '@/utils/helpers'

export const recentlies = {
  recentlies: {
    query: RECENTLIES,
    result({ data }) {
      this.recentlies = data.recentlies
    }
  }
}

export const experiences = {
  expperiences: {
    query: EXPERIENCES,
    result({ data }) {
      this.experiences = data.experiences
    }
  }
}
