'use client'

import { SportsQuery } from '@azuro-org/sdk'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import cx from 'clsx'

import { League } from './League'


type CountryProps = {
  className?: string
  sportSlug: string
  country: SportsQuery['sports'][0]['countries'][0]
}

export function Country(props: CountryProps) {
  const { className, sportSlug, country } = props
  const { leagues } = country

  const params = useParams()

  const isCountryPage = params.country
  const isLeaguePage = params.league
  return (
    <div className='table-wrap mb-40 pb-10'>

      {
        leagues.map(league => (
          <League
            key={league.slug}
            className="table-wrap mb-40 pb-10"
            league={league}
            sportSlug={sportSlug}
            countryName={country.name}
            countrySlug={country.slug}
          />
        ))
      }
    </div>
  )
}
