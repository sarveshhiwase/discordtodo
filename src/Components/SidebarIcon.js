function SideBarIcon({ icon, text = "tooltip", click, color, animate }) {
  return (
    <div className={`sidebar-${color} group`} onClick={click}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
export default SideBarIcon;
