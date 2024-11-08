'use client'
import Banner from '@/components/home/Banner';
import React, { useEffect } from 'react'

import { Sport } from '@/components'
import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSports, type UseSportsProps, Game_OrderBy, OrderDirection } from '@azuro-org/sdk'

const useData = () => {
   const params = useParams()
   const isTopPage = params.sport === 'top'

   const props: UseSportsProps = isTopPage ? {
      gameOrderBy: Game_OrderBy.Turnover,
      filter: {
         limit: 10,
      }
   } : {
      gameOrderBy: Game_OrderBy.StartsAt,
      orderDir: OrderDirection.Asc,
      filter: {
         sportSlug: params.sport as string,
         countrySlug: params.country as string,
         leagueSlug: params.league as string,
      }
   }

   const { loading, sports } = useSports(props)

   return {
      sports,
      loading,
   }
}

export default function Home() {

   useEffect(() => {
      // Ensure bootstrap is only used in the client-side
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

   const { loading, sports } = useData()
   const currently_url = usePathname();

   const sortedSports = [...sports || []].sort((a, b) => b.countries!.length - a.countries!.length);

   return (
      <>
         <Banner />
         {
            loading ? (
               <div>Loading...</div>
            ) : (
               <div>
                  {
                     sortedSports.map((sport) => (
                        <Sport key={sport.slug} sport={sport} />
                     ))
                  }
               </div>
            )
         }
      </>
   )
}

declare module 'react' {
   interface SVGProps<T> extends AriaAttributes, DOMAttributes<T> {
      // add any additional SVG-specific attributes you need
   }
}