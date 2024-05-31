export const Profession = ({ nameProps, addProps, salaryProps }) => {
  return (
    <>
      <h2>
        {nameProps} is a Full Stack Developer from {addProps} Full stack
        Developer estimated salary is {salaryProps}
      </h2>
    </>
  );
};

export const Address = () => {
  return (
    <>
      <h3>NSW,Sydney</h3>
    </>
  );
};
