import { BreadCrum } from '../../Components/BreadCrum/BreadCrum';
import { FaQData } from '../../Components/FaQ/Faq';
import { ServiceComp } from '../../Components/ServiceWEB/Service';
import './services.css';

export default function Services() {
  return (
  
    <>
       <BreadCrum title = "Our Services" />

       {/* our service component  */}
        <ServiceComp />
      {/* our service component  end */}

      <FaQData />

    </>
  )
}
