import { Image } from "lucide-react";
import { isDoubleUnderscores } from "@/utils/is-double-underscores";
import { useAppSelector } from "@/redux/hooks";
import { selectAccentColor } from "@/redux/features/Custom Styles/customStyleSlice";
import { selectProfile } from "@/redux/features/Resume Data/resumeDataSlice";
import { Show } from "@/components/control-flow/show";
import { dummyData } from "../../dummy-data";

export default function ImageSection() {
  const accentColor = useAppSelector((state) =>
    selectAccentColor(state, "template-1"),
  );

  const { image, firstName, lastName } = useAppSelector(selectProfile);

  return (
    <div
      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[calc(var(--WIDTHPERCENTAGE)*3)]"
      style={{
        border: `calc(var(--WIDTHPERCENTAGE)*1) solid ${accentColor}`,
      }}
    >
      <Show
        when={image !== ""}
        fallback={
          <ImagePlaceholder
            accentColor={accentColor}
            firstName={firstName}
            lastName={lastName}
          />
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} className="object-cover object-center" alt="" />
      </Show>
    </div>
  );
}

function ImagePlaceholder({
  accentColor,
  firstName,
  lastName,
}: {
  accentColor: string;
  firstName: string;
  lastName: string;
}) {
  return (
    <p
      className="text-[calc(var(--WIDTHPERCENTAGE)*62)] font-semibold leading-none"
      style={{
        color: accentColor,
      }}
    >
      <Show
        when={isDoubleUnderscores(firstName) && isDoubleUnderscores(lastName)}
        fallback={<Fallback firstName={firstName} lastName={lastName} />}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image className="h-[calc(var(--WIDTHPERCENTAGE)*50)] w-[calc(var(--WIDTHPERCENTAGE)*50)] stroke-[calc(var(--WIDTHPERCENTAGE)*1.2)]" />
      </Show>
    </p>
  );
}

const Fallback = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`;
  }

  if (firstName) {
    return firstName[0];
  }

  if (lastName) {
    return lastName[0];
  }

  return dummyData.profile.firstName[0] + dummyData.profile.lastName[0];
};
