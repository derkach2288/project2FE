import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { instance } from "../../utils/axios"
import { MainLowerPartContainer, MainLowerPartFlex } from "./styles"
import InfoList from "../InfoList/InfoList";

interface InfoProps {
  id: number;
  title: string;
  description: string;
  address: string;
  tel: string;
  link: string;
  status: number;
  city: {
    id: number;
    name: string;
  };}

export interface InfoListProps {
  infoList: InfoProps[]
}


function MainLowerPart() {
  const location = useLocation()
  const navigate = useNavigate()
  const [infoData, setInfoData] = useState<InfoProps[]>([])


  // useEffect(() => {
  //   async function fetchInfoData() {
  //     try {
  //       let endpoint = `/`
  //       if (location.pathname === `/cafes-restaurants`) {
  //         endpoint = `/restaurants_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/children`) {
  //         endpoint = `/children_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/shops`) {
  //         endpoint = `/shops_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/physicians`) {
  //         endpoint = `/doctors_info/physician`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/stomatologists`) {
  //         endpoint = `/doctors_info/stomatologist`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/pediatrists`) {
  //         endpoint = `/doctors_info/pediatrist`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/orthopedists`) {
  //         endpoint = `/doctors_info/orthopedist`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/cardiologists`) {
  //         endpoint = `/doctors_info/cardiologist`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/doctors/dermatologists`) {
  //         endpoint = `/doctors_info/dermatologist`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/services/legal_services`) {
  //         endpoint = `/legal_services_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/services/translators`) {
  //         endpoint = `/translators_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       } else if (location.pathname === `/services/hair_beauty`) {
  //         endpoint = `/hair_beauty_info`
  //         console.log("Fetching data from endpoint:", endpoint)
  //       }
  //       const response = await instance.get<InfoProps[]>(endpoint)
  //       console.log("Received data:", response.data)
  //       setInfoData(response.data)
  //     } catch (error) {
  //       console.error("Error fetching data:", error)
  //     }
  //   }
  //   fetchInfoData()
  // }, [location.pathname])

  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
        {location.pathname === `/` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/restaurants_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {/* {location.pathname === `/${city}/children` &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} endpoint={`/${city}/children_info`} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/shops` &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} endpoint={`/${city}/shops_info`} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/physicians` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/physician`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/stomatologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/stomatologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/pediatrists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/pediatrist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/orthopedists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/orthopedist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/cardiologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/cardiologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/dermatologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/dermatologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/legal_services` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/legal_services_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/translators` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/translators_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/hair_beauty` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/hair_beauty_info`}
            />
          ) : (
            <div>Loading...</div>
          ))} */}
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart
