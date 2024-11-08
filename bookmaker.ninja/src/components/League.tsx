'use client'
import { GamesQuery, SportsQuery, useGameStatus, useGameMarkets, useLive } from '@azuro-org/sdk'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

type GameProps = {
  className?: string
  countryName: string
  game: GamesQuery['games'][0]
  league: SportsQuery['sports'][0]['countries'][0]['leagues'][0]
}

function Game(props: GameProps) {
  const { className, countryName, game, league } = props
  const { gameId, title, startsAt, status: graphStatus, } = game
  // const { isLive } = useLive()
  const current_url = usePathname();
  const isLive = current_url.includes('/live');
  // console.log(isLive);
  const { status } = useGameStatus({
    graphStatus,
    startsAt: +startsAt,
    isGameExistInLive: isLive,
  })
  const { markets } = useGameMarkets({
    gameStatus: status,
    gameId,
  })
  return (
    <div className="table-inner" key={''}>
      <div className="table-head">
        <Link href="details" className="left-compo">
          <span>
            <img src="/img/table/l-flag.png" alt="icon" />
          </span>
          <span>{league.name}</span>
          <span>
            <img src="/img/table/hot.png" alt="icon" />
          </span>
        </Link>
        <ul className="right-compo">
          <li>Full Time Result</li>
        </ul>
      </div>
      <div className="table-body">
        <ul className="table-body-left">
          <li>
            <Link href={`/event/${gameId}`}>
              <span>{game['participants'][0]['name']}</span>
              <span className="icon">
                <img src={game.participants[0]['image'] || ''} alt="flag" className='imgsize' />
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/event/${gameId}`} className="vs">
              VS
            </Link>
          </li>
          <li>
            <Link href={`/event/${gameId}`}>
              <span className="icon">
                <img src={game['participants'][1]['image'] || ''} alt="flag" className='imgsize' />
              </span>
              <span>{game['participants'][1]['name'] || ''}</span>
            </Link>
          </li>
        </ul>
        <div className="table-body-right">
          {
            Boolean(markets?.[0]?.outcomeRows[0]) && (
              <>
                {
                  markets![0].outcomeRows[0].map((outcome) => (
                    <Link href="" key={outcome.selectionName} className="table-pointing-box">
                      <span className="list">{outcome.selectionName}</span>
                      <span>{outcome.odds?.toFixed(2)}</span>
                    </Link>
                  ))
                }
              </>
            )
          }
          <Link href={`/event/${gameId}`} className="table-pointing-box">
            More =&gt;
          </Link>
          {/* <Link href="#0" className="table-pointing-box">
            <span className="list">1</span>
            <span>7.58</span>
          </Link>
          <Link href="#0" className="table-pointing-box">
            <span className="list">X</span>
            <span>8.08</span>
          </Link>
          <Link href="#0" className="table-pointing-box">
            <span className="list">2</span>
            <span>2.98</span>
          </Link>
          <Link href="#0" className="table-pointing-box">
            <span className="list">O 2.5</span>
            <span>1.84</span>
          </Link>
          <Link href="#0" className="table-pointing-box">
            <span className="list">U 2.5</span>
            <span>5.7</span>
          </Link>
          <Link href="#0" className="table-pointing-box">
            <span className="last-digit">+37</span>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

type LeagueProps = {
  className?: string
  sportSlug: string
  countryName: string
  countrySlug: string
  league: SportsQuery['sports'][0]['countries'][0]['leagues'][0]
}

export function League(props: LeagueProps) {
  const { className, sportSlug, countryName, countrySlug, league } = props
  const { games } = league

  const params = useParams()

  const isLeaguePage = params.league

  return (
    <>
      <div>
        {/* {
          isLeaguePage && (
            <>
              <Link
                className="hover:underline w-fit"
                href={`/events/${sportSlug}/${countrySlug}`}
              >
                
              </Link>
              <div className="mx-2">&middot;</div>
            </>
          )
        }
        <Link
          className="hover:underline w-fit"
          href={`/events/${sportSlug}/${countrySlug}/${league.slug}`}
        >
          {league.name}
        </Link> */}
      </div>
      {
        games.map(game => (
          <Game
            key={game.gameId}
            className="mt-2 first-of-type:mt-0"
            game={game}
            countryName={countryName}
            league={league}
          />
        ))
      }
    </>
  )
}
