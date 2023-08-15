import React from "react";
import './style.scss'
import Lottie from 'react-lottie';
import animationData from './loading.json';

class Loading extends React.Component {

    render() {
      return <div className="loading">
        <Lottie 
	      options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }}}
          height={300}
          width={250}
        />
      </div>;
    }
  }

  export default Loading;