'use client'

import { SportsQuery } from '@azuro-org/sdk'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import cx from 'clsx'

import { Country } from './Country'


type SportProps = {
  sport: SportsQuery['sports'][0]
}

export function Sport(props: SportProps) {
  const { sport } = props
  const { countries } = sport
  const params = useParams()
  const match_type = countries[0]

  const isSportPage = params.sport !== 'top'


  return (
    <div className="main-body-tabbing">
      <div className="container">
        <div className="main-tabbing">
          <div className="tab-content" id='tabContentmain'>
            <div className="tab-pane fade show active" id="bets all" role="tabpane1">
              <div className='match-table pt-60'>
                <div className="match-table pt">
                  <h2>
                    {sport.name}
                  </h2>
                </div>
                {
                  countries.map(country => (
                    <Country
                      key={country.slug}
                      className=""
                      country={country}
                      sportSlug={sport.slug}
                    />
                  ))
                }
              </div>
            </div >
          </div>
        </div>
      </div>
    </div>

  )
}
