import { cn } from "@/utils/cn";
// import { useImage, useSetImage } from "@/store/resume-data-store";
import { useSelector, useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { setProfile } from "@/redux/features/Resume Data/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function ImageInput({ className }: { className?: string }) {
  const image = useAppSelector((state) => state.resumeData.profile.image);
  const dispatch = useAppDispatch();

  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor="profile-image">Upload your profile picture</Label>
      <div className="flex items-end gap-4">
        <Dropzone
          accept={{
            "image/*": [".jpeg", ".png", ".svg", ".jpg", ".webp"],
          }}
          multiple={false}
          onDrop={(acceptedFiles) => {
            dispatch(
              setProfile({
                fieldName: "image",
                value: URL.createObjectURL(acceptedFiles[0]),
              }),
            );
          }}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              {...getRootProps()}
              className={cn(
                "h-28 w-28 cursor-pointer overflow-hidden rounded border-2 border-dashed border-primary/70 text-center text-xs",
                isDragActive && "bg-primary/10",
              )}
            >
              <input {...getInputProps()} id="profile-image" />
              {image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              )}

              <div className="flex h-full w-full items-center justify-center px-4">
                {!image &&
                  (isDragActive && !isDragReject ? (
                    <p>Drop the image here ...</p>
                  ) : (
                    <p>
                      Drag &#39;n&#39; drop image here, or click to select
                      image.
                    </p>
                  ))}
              </div>
            </div>
          )}
        </Dropzone>

        {image && (
          <div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() =>
                dispatch(
                  setProfile({
                    fieldName: "image",
                    value: "",
                  }),
                )
              }
            >
              Remove Image
            </Button>
            <p className="text-sm font-medium text-destructive">
              If you click the above button image will be removed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
