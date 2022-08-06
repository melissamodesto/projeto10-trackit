
export default function NoHabit({ toggleCreateHabit }) {
  return (
    <>
      <div className="my-habits">
        <h2>Meus Hábitos</h2>
        <div onClick={() => toggleCreateHabit(true)} className="button-add-habits">+</div>
      </div>
    </>
  );
}
