"use client";

const Tags = ({
  taglist,
  onClick,
}: {
  taglist: string[];
  onClick?: (tag: string) => void;
}) => {
  return (
    <div className="space-x-2 flex my-3 ">
      {taglist.map((tag) => (
        <button className="sm:text-sm text-xs" onClick={() => onClick?.(tag)} key={tag}>
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
