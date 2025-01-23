import { AboutUs } from '../../Components/AboutComp/Aboutus';
import { BreadCrum } from '../../Components/BreadCrum/BreadCrum';
import { Featureweb } from '../../Components/Features/Features';
import './About.css';

export default function About() {
  return (
   <>
      <BreadCrum  title ="About us"/>
      {/* about us componnet  */}
      <AboutUs />
      {/* about us componnet end  */}
      {/* features componnet  */}
      <Featureweb />
      {/* features componnet end  */}
      
   </>
  )
}
