interface NavbarStatItemProps {
  imageSrc: string;
  imageShadow?: string;
  boxBg?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  imageTop?: number | string;
  imageRight?: number | string;
  value: string;
  label: string;
  badge: string;
}

export default function NavbarStatItem({
  imageSrc,
  imageShadow,
  boxBg,
  imageWidth,
  imageHeight,
  imageTop,
  imageRight,
  value,
  label,
  badge,
}: NavbarStatItemProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#57df8f] via-[#2fc673] to-[#1ca25b] pt-[20px] pb-[20px] pl-[32px] pr-[30px] text-white shadow-lg transition-all hover:shadow-xl min-h-[169px]"
      style={{
        background: boxBg
          ? boxBg
              .replace(/^background:\s*/i, "")
              .replace(/;\s*$/, "")
              .replace(/\s*\n\s*/g, " ")
              .trim()
          : undefined,
      }}
    >
      <div
        className="absolute inset-0 bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/image/Union.png')",
          backgroundSize: '120%',
          backgroundPosition: 'right bottom',
        }}
      />

      <div className="relative flex items-start justify-between gap-6">
        <div className="max-w-[90%]">
          <span className="text-white text-[15px] font-bold leading-[23px]">
            {badge}
          </span>

          <h3 className="mt-[21px] mb-[6px] max-w-[115px] text-[29px] leading-[29px] font-semibold text-white">
            {value}
          </h3>

          <p className="mt-3 text-[13px] leading-[19px] font-normal text-white">
            {label}
          </p>
        </div>

        <div className="relative z-10">
          <div
              className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20"
              style={{ backgroundImage: "url('/image/Union.png')", backgroundSize: '120%' }}
            />
          </div>
        <div
            className="absolute rounded-[1.5rem]"
            style={{
              width: imageWidth ?? 'auto',
              height: imageHeight ?? 'auto',
              top: imageTop ?? '50%',
              right: imageRight ?? '5px',
              transform: 'translateY(-50%)',
              filter: imageShadow ?? 'drop-shadow(12.09px 16.41px 13.82px rgba(80,24,131,1))',
            }}
          >
            <img
              src={imageSrc}
              alt={label}
              className="h-full w-full object-contain"
            />
          </div>
      </div>
    </div>
  );
}