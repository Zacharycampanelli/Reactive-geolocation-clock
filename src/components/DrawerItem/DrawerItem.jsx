const DrawerItem = ({ label, content, textColor, id }) => {
  let col_width, right_col_margin;

  id % 2 !== 0 ? (col_width = "md:col-span-2") : (right_col_margin = "md:ml-4");

  return (
    <span
      className={`${textColor} ${col_width} ${right_col_margin} lg:marker:x-[150px] flex w-[100%]  justify-between md:flex-col  md:justify-center lg:items-start`}
    >
      <p className="text-[10px] leading-[28px] tracking-[2px] md:text-[13px] md:tracking-[2.6px] lg:mb-2">
        {label}
      </p>
      <p className="text-[20px] font-bold md:text-[34px]">{content}</p>
    </span>
  );
};

export default DrawerItem;
