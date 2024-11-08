import dayjs from 'dayjs'
import { type GameQuery } from '@azuro-org/sdk'


type ParticipantLogoProps = {
  image?: string | null
  name: string
}

export function ParticipantLogo(props: ParticipantLogoProps) {
  const { image, name } = props

  return (
    <div className="detail-progress-items">
      <div className="bar1">
        <div className="changchun">
          {
            Boolean(image) && (
              <img src={image!} alt="" />
            )
          }
        </div>
      </div>
      <p>{name}</p>
    </div>

  )
}

type Props = {
  game: GameQuery['games'][0]
}

export function GameInfo(props: Props) {
  const { sport, league, participants, startsAt } = props.game

  return (
    <>
      <div className="details-wrapper">
        <div className="scoreboard-head">
          <span>
            <img src="/img/table/details/scoreboard.png" alt="img" />
          </span>
          <span className='text-base'>Scoreboard</span>
        </div>
        <div className="banner-wrapper owl-theme owl-carousel">
          <div className="details-img">
            <div className="details-progress">
              <ParticipantLogo {...participants[0]} />
              <div className="detail-progress-items details-middle-items">
                <a href="/#" className='live'>{dayjs(+startsAt * 1000).format('DD MMM HH:mm')}</a>
                <div className='detaisl-middle-circle-wrap d-flex align-items-center'>
                  <h3 className='gra'>0</h3>
                  <div className='bar-middle-circle'>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M83.4422 83.4422C84.4988 84.4988 86.2179 84.5035 87.2159 83.3913C93.1946 76.728 97.2863 68.5673 99.0393 59.7545C100.969 50.0555 99.9784 40.0021 96.194 30.8658C92.4096 21.7295 86.001 13.9206 77.7785 8.42652C69.5561 2.93245 59.8891 4.51887e-07 50 0C40.1109 -4.51887e-07 30.4439 2.93245 22.2215 8.42652C13.999 13.9206 7.59041 21.7295 3.80602 30.8658C0.0216423 40.0021 -0.968525 50.0555 0.960735 59.7545C2.71371 68.5673 6.80542 76.728 12.7841 83.3913C13.7821 84.5035 15.5012 84.4988 16.5578 83.4422V83.4422C17.6144 82.3856 17.6075 80.6777 16.6169 79.559C11.3911 73.6573 7.81207 66.4618 6.26793 58.6988C4.54746 50.0495 5.43047 41.0841 8.80529 32.9366C12.1801 24.789 17.8952 17.8252 25.2278 12.9257C32.5604 8.02626 41.1812 5.41117 50 5.41117C58.8188 5.41117 67.4396 8.02626 74.7722 12.9257C82.1048 17.8252 87.8199 24.789 91.1947 32.9366C94.5695 41.0841 95.4525 50.0495 93.7321 58.6989C92.1879 66.4618 88.6089 73.6573 83.3831 79.559C82.3925 80.6777 82.3856 82.3856 83.4422 83.4422V83.4422Z" fill="#D9D9D9"></path><path d="M15.4609 17.6919C14.3697 16.6711 12.6512 16.7239 11.6909 17.8687C3.97445 27.0681 -0.194085 38.7672 0.00693804 50.8329C0.207961 62.8986 4.7639 74.4523 12.7825 83.3896C13.7804 84.5018 15.4997 84.4973 16.5563 83.4407V83.4407C17.613 82.3842 17.606 80.6762 16.6154 79.5574C9.58572 71.6181 5.59499 61.4046 5.41735 50.7428C5.23972 40.081 8.888 29.7402 15.6493 21.5711C16.6021 20.42 16.5522 18.7127 15.4609 17.6919V17.6919Z" fill="url(#paint0_linear_965_3)"></path><defs><linearGradient id="paint0_linear_965_3" x1="-6.43565" y1="115" x2="121.545" y2="94.548" gradientUnits="userSpaceOnUse"><stop offset="5%" stop-color="#81CD34"></stop><stop offset="1" stop-color="#00A182"></stop></linearGradient></defs></svg>
                    <span>VS</span>
                  </div>
                  <h3 className='sto'>0</h3>
                </div>
              </div>
              <ParticipantLogo {...participants[1]} />
            </div>
          </div>
        </div>
        <div className="detail-tap">
          <ul className="nav" role='tablist'>
            <li className="nav-item" role="presentation"><a className="nav-link link-secondary" id="details-tab" data-bs-toggle="tab" data-bs-target="#detail1" href="/details#" aria-selected="false" role="tab"><span>All markets</span></a></li>
            <li className="nav-item" role="presentation"><a className="nav-link link-secondary" id="details-tab01" data-bs-toggle="tab" data-bs-target="#detail1" href="/details#" aria-selected="false" role="tab"><span>Winner</span></a></li>
          </ul>
        </div>
      </div>
    </>

  )
}
