function SideBarIcon({icon,text="tooltip",click}){
	return (
	<div className="sidebar-icon group" onClick={click}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
  )
}
export default SideBarIcon;