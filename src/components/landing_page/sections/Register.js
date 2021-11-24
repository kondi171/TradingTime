import { Link } from 'react-router-dom';
function Register() {
    return ( 
      <div className="register-wrapper">
        <form className="form"> 
            <h2>Zarejestruj się</h2>
            <div className="data-wrapper">
              <div className="account-data">
                <label htmlFor="login"><i class="fa fa-user"></i> Login</label>
                <input type="text" name="login" placeholder="Wprowadź nazwę użytkownika"/>
                <label htmlFor="email"><i class="fa fa-envelope"></i> E-mail</label>
                <input type="email" name="email" placeholder="Wprowadź adres e-mail"/>
                <label htmlFor="password1"><i class="fa fa-unlock"></i> Hasło</label>
                <input type="password" name="password1" placeholder="Wprowadź hasło"/>
                <label htmlFor="password2"><i class="fa fa-unlock-alt"></i> Powtórz Hasło</label>
                <input type="password" name="password2" placeholder="Powtórz hasło"/>
              </div>
              <div className="adress-data">
                <label htmlFor="name"><i class="fa fa-user-circle-o"></i> Imię</label>
                <input type="text" name="name" placeholder="Wprowadź imię"/>
                <label htmlFor="lastname"><i class="fa fa-user-circle"></i> Nazwisko</label>
                <input type="text" name="lastname" placeholder="Wprowadź nazwisko"/>
                <label htmlFor="phone"><i class="fa fa-phone"></i> Nr telefonu</label>
                <input type="text" name="phone" placeholder="Wprowadź numer telefonu"/>
                <label htmlFor="adress"><i class="fa fa-address-card"></i> Adres</label>
                <input type="text" name="adress" placeholder="Wprowadź adres"/>
              </div>
            </div>
            <Link to="/login">Masz już konto? Zaloguj się!</Link>
            <input type="button" value="Zarejestruj się" />
            {/* <button className="facebook"><i className="fa fa-facebook"></i><span>Zaloguj się z Facebook</span></button> */}
            <Link to="/">Powrót do Strony Głównej</Link>
        </form>
      </div>
    );
}

export default Register;