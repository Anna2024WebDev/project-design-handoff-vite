// import { Navigation } from "./Navigation"
// import { Menu } from "./Menu"
// import { Button } from "../../ui/Button"
import { Typography } from "../../ui/Typography"
import witch from "../../assets/Witch.png"
import styled from "styled-components"


const HeaderFlex = styled.section`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    gap: 16px;   

    @media (min-width: 768px) {
    flex-direction: row; 

    }
`;

const HeaderImg = styled.img`
    max-width: 100%;    
`;

const HeaderContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
`;


export const Header = () => {
  const title = "Daily spells"
  const bodyText = "Your go-to guide for everyday magic."


  return (
    <header>
      {/* <Navigation /> */}
      {/* <Menu /> */}
      <HeaderFlex>
        <HeaderImg src={witch} alt="Witch Image" className="witch" />
        <HeaderContent>
          {/* Heading 1 */}
          <Typography typography={title} level={1} />

          {/* Body Text */}
          <Typography typography={bodyText} level={4} />
          {/* <Button /> */}
        </HeaderContent>
      </HeaderFlex>
    </header>
  )
}

