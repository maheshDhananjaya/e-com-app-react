type HeaderProps = {
  cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="app-header">
      <div className="header__brand">E-Shop</div>
      <div className="header__actions">
        <button
          className="header__cart"
          type="button"
          aria-label="Shopping cart"
        >
          🛒
          {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
        </button>
        <button className="header__button" type="button">
          Login
        </button>
        <button
          className="header__button header__button--primary"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
