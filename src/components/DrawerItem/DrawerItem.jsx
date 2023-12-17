
const DrawerItem = ({ label, content, textColor, columns }) => {
  let col_width, right_col_margin;
 columns === 2 ? (col_width = 'lg:col-span-2') : '';
columns === 1 ? (right_col_margin = "lg:ml-12") : '';
  return (
    <span className={`${textColor} ${col_width} ${right_col_margin} flex justify-between w-[100%] md:flex-col md:justify-start md:my-6 lg:items-start lg:marker:x-[150px]`}>
      <p className="text-[10px] leading-[28px] tracking-[2px] md:text-[13px] md:tracking-[2.6px] lg:mb-2">{label}</p>
      <p className="text-[20px] font-bold md:text-[40px]">{content}</p>
    </span>
  );
};

export default DrawerItem;
