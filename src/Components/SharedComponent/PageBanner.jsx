import { HeadingInfo } from "./HeadingInfo";

export const PageBanner = ({
  backgroundImage,
  heading,
  title,
  heightClass = "h-[90vh] md:h-screen",
  gradient = "bg-gradient-to-l from-[#213E89]/50 to-[#081023]/80",
}) => {
  return (
    <div
      className={`relative bg-no-repeat bg-cover bg-center ${heightClass} flex items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${gradient}`} />
      <div className="relative z-10 px-4 md:px-8 w-full max-w-7xl mx-auto md:pt-24">
        {heading && <HeadingInfo>{heading}</HeadingInfo>}
        {title && (
          <div className="max-w-4xl my-7">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
