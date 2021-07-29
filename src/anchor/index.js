const Anchor = (props)=>{
    //These components are called as stateless components
    
    /*props are immutable if you try to change the value of the props it will throw exception */
    return (
        <a class={props.details.cssclass} href={props.details.link}>{props.details.linktext}</a>
    )
}

export default Anchor;