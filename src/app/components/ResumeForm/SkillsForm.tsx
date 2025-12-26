import { Form } from "components/ResumeForm/Form";
import {
  BulletListTextarea,
  InputGroupWrapper,
} from "components/ResumeForm/Form/InputGroup";
import { FeaturedSkillInput } from "components/ResumeForm/Form/FeaturedSkillInput";
import { BulletListIconButton } from "components/ResumeForm/Form/IconButton";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectSkills, changeSkills } from "lib/redux/resumeSlice";
import {
  selectShowBulletPoints,
  changeShowBulletPoints,
  selectThemeColor,
} from "lib/redux/settingsSlice";

export const SkillsForm = () => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();
  const { featuredSkills, descriptions } = skills;
  const form = "skills";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));
  const themeColor = useAppSelector(selectThemeColor) || "#38bdf8";

  const handleSkillsChange = (field: "descriptions", value: string[]) => {
    dispatch(changeSkills({ field, value }));
  };
  const handleFeaturedSkillsChange = (
    idx: number,
    skill: string,
    rating: number
  ) => {
    dispatch(changeSkills({ field: "featuredSkills", idx, skill, rating }));
  };
  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form}>
      <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-3">
        {/* Skills List Section */}
        <div className="relative col-span-full">
          <BulletListTextarea
            label="Skills List"
            labelClassName="col-span-full"
            name="descriptions"
            placeholder="Bullet points"
            value={descriptions}
            onChange={handleSkillsChange}
            showBulletPoints={showBulletPoints}
          />
          <div className="absolute left-[4.5rem] top-[0.07rem]">
            <BulletListIconButton
              showBulletPoints={showBulletPoints}
              onClick={handleShowBulletPoints}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-full my-2 border-t-2 border-dotted border-gray-200 sm:mb-4 sm:mt-6" />

        {/* Featured Skills Section */}
        <div className="col-span-full">
          <InputGroupWrapper
            label="Featured Skills (Optional)"
            className="col-span-full"
          >
            <div className="mt-3 rounded-lg bg-purple-50 p-3 sm:p-4">
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-purple-900">
                  Highlight your top skills. More circles = higher proficiency.
                </p>
              </div>
            </div>
          </InputGroupWrapper>
        </div>

        {/* Featured Skills Grid - Full width on mobile, 2 columns on tablet+ */}
        <div className="col-span-full grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {featuredSkills.map(({ skill, rating }, idx) => (
            <FeaturedSkillInput
              key={idx}
              className="w-full"
              skill={skill}
              rating={rating}
              setSkillRating={(newSkill, newRating) => {
                handleFeaturedSkillsChange(idx, newSkill, newRating);
              }}
              placeholder={`Featured Skill ${idx + 1}`}
              circleColor={themeColor}
            />
          ))}
        </div>
      </div>
    </Form>
  );
};
