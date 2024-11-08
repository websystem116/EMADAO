'use client'

import type { GameMarkets, MarketOutcome } from '@azuro-org/sdk'
import { OutcomeButton } from '@/components'


type GameMarketsProps = {
  markets: GameMarkets
}

export function GameMarkets(props: GameMarketsProps) {
  const { markets } = props

  return (
    <div className="tab-content pt-60" id="d-wrap">
      <div className='tab-pane fade active show' id='detail1' role='tabpanel' aria-labelledby='#details-tab'>
        <div className='row g-4'>
          <div className=" col-xl-12 col-lg-6">
            <div className='detail-match-winner'>
              <div className='details-match-wrap'>
                <div className="accordion" id='details-accordion'>
                  {markets.map(({ name, description, outcomeRows }) => (
                    <div className="accordion-item" key={name}>
                      <div className="accordion-header">
                        <>
                          <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='##detaislaccor1' aria-expanded='false' aria-controls='detaislaccor1'>
                            <span>
                              {name}
                            </span>
                          </button>
                          <div className="accordion-collapse collapse show" id="detaislaccor1">
                            <div className='accordion-body d-flex align-items-center justify-content-between'>
                              {
                                outcomeRows.map((outcomes, index) => (
                                  <div key={index} className="body-items">
                                    {
                                      outcomes.map((outcome) => (
                                        <a href="#" className='item' key={outcome.selectionName}>
                                          <span>{outcome.selectionName}</span>
                                          <span className='num'>{outcome.odds?.toFixed(2)}</span>
                                        </a>
                                      ))
                                    }
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
