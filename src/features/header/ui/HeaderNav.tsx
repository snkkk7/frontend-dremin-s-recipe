import { useAppSelector } from "@/shared";
import Link from "next/link";

export const HeaderNav = ({ logout }: { logout: () => void }) => {
  const { isAuth, isAdmin, isActivated } = useAppSelector(
    (state) => state.authSlice
  );

  return (
    <>
      <nav className="md:flex md:gap-5 hidden md:block ">
        <Link href={"/"}>Главная</Link>

        {isAdmin && <Link href={"/admin"}>Админ панель</Link>}

        {isAuth && (
          <>
            <Link href={"/profile"}>профиль</Link>
            {isActivated && <Link href={"/postRecipe"}>создать рецепт</Link>}
            <button onClick={logout}>выйти</button>
          </>
        )}

        {!isAuth && (
          <>
            <Link href={"/signin"}>войти</Link>
            <Link href={"/signup"}>зарегистрироваться</Link>
          </>
        )}
      </nav>
    </>
  );
};
