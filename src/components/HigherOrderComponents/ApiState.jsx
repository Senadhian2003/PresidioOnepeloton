import { Circles } from "react-loader-spinner";
export const ApiState = (Component) => {
    return (props) => {
      if (props.error) return <div className="color-danger">{props.error}</div>;
      if (props.isLoading) return <div style={{height:'400px',display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        
<div style={{}}>
<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div>

      </div>;
      
      return <Component {...props} />;
    };
  };
  