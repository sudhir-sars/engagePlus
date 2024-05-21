import React from 'react'
import OptionCard from '../cards/OptionCard'
import plainTextFileImage from '../../assets/plainTextFileImage.png'
import HtmlCardImage from '../../assets/HtmlCardImage.png'
import underConstructionCardImage from '../../assets/underConstructionCardImage.png'

const Email = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center  -mt-28 space-x-10'>
      <OptionCard
      cardWidth={"w-auto"}
      cardHeight={"h-auto"}
      title={"Message Plain text"}
      image={plainTextFileImage}
      // imageHeight={150}
      imageWidth={180}
      imageTop={"mt-6"}
      link={"EmailMessageInput"}
      />
      <OptionCard
      cardWidth={"w-auto"}
      cardHeight={"h-auto"}
      title={"Embed HTML "}
      image={HtmlCardImage}
      // imageHeight={150}
      imageWidth={210}
      link={"EmailHtmlInput"}
      />
      <OptionCard
      cardWidth={"w-auto"}
      cardHeight={"h-auto"}
      title={"Use Templates"}
      image={underConstructionCardImage}
      // imageHeight={150}
      imageWidth={190}
      
      />
    
    </div>
  )
}

export default Email
