const DrawerItem = ({ label, content, textColor, columns }) => {
  let col_width;
  columns === 2 ? (col_width = 'col-start-1 col-end-3') : '';
  return (
    <span className={`${textColor} ${col_width} flex justify-between w-[100%] md:flex-col md:justify-start md:mt-12`}>
      <p className="text-[10px] leading-[28px] tracking-[2px] md:text-[13px] md:tracking-[2.6px]">{label}</p>
      <p className="text-[20px] font-bold md:text-[40px]">{content}</p>
    </span>
  );
};

export default DrawerItem;
