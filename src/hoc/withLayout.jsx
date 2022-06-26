const withLayout = (Component) =>{

    const Wrapper =(props)=>{

        return(
            <div className="bg-red">
                <div className="left-side">Left Side</div>
                <div className="right-side">
                <Component {...props}/>
                </div>
            </div>
        )

    }

    return Wrapper
}
export default withLayout;