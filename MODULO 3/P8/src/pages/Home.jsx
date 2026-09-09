import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ user, logout }) {
  const [tweet, setTweet] = useState("");

  const [tweets, setTweets] = useState(() => {
    const storedTweets = localStorage.getItem("tweets");

    return storedTweets
      ? JSON.parse(storedTweets)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tweets",
      JSON.stringify(tweets)
    );
  }, [tweets]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!user || tweet.trim() === "") {
      return;
    }

    const nuevoTweet = {
      id: Date.now(),
      usuario: user.username,
      texto: tweet.trim()
    };

    setTweets([
      nuevoTweet,
      ...tweets
    ]);

    setTweet("");
  }

  function eliminarTweet(id) {
    setTweets(
      tweets.filter(
        (tweetActual) => tweetActual.id !== id
      )
    );
  }

  return (
    <div className="twitter-layout">

      <aside className="sidebar">

        <div className="x-logo">
          𝕏
        </div>

        <Link to="/">
          🏠 Inicio
        </Link>

        {user && (
          <Link to="/profile">
            👤 Perfil
          </Link>
        )}

        {!user && (
          <Link to="/login">
            🔐 Iniciar sesión
          </Link>
        )}

      </aside>

      <main className="feed">

        <div className="feed-header">
          <h2>Inicio</h2>
        </div>

        {user ? (
          <div className="crear-tweet">

            <div className="avatar">
              {user.username
                .charAt(0)
                .toUpperCase()}
            </div>

            <form onSubmit={handleSubmit}>

              <textarea
                placeholder="¿Qué está pasando?"
                value={tweet}
                onChange={(event) =>
                  setTweet(event.target.value)
                }
              />

              <div className="tweet-actions">

                <span>
                  {tweet.length}/280
                </span>

                <button
                  type="submit"
                  disabled={
                    tweet.trim() === "" ||
                    tweet.length > 280
                  }
                >
                  Publicar
                </button>

              </div>

            </form>

          </div>
        ) : (
          <div className="iniciar-aviso">

            <h3>
              Inicia sesión para publicar
            </h3>

            <p>
              Necesitas una cuenta para compartir tweets.
            </p>

            <Link
              className="boton-link"
              to="/login"
            >
              Iniciar sesión
            </Link>

          </div>
        )}

        <div className="tweets">

          {tweets.length === 0 ? (
            <div className="sin-tweets">
              No hay tweets todavía.
            </div>
          ) : (
            tweets.map((item) => (

              <article
                className="tweet"
                key={item.id}
              >

                <div className="avatar">
                  {item.usuario
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div className="tweet-contenido">

                  <div className="tweet-usuario">
                    <strong>
                      {item.usuario}
                    </strong>

                    <span>
                      @{item.usuario.toLowerCase()}
                    </span>
                  </div>

                  <p>
                    {item.texto}
                  </p>

                  {user &&
                    user.username === item.usuario && (
                      <button
                        className="eliminar"
                        onClick={() =>
                          eliminarTweet(item.id)
                        }
                      >
                        Eliminar
                      </button>
                    )}

                </div>

              </article>

            ))
          )}

        </div>

      </main>

      <aside className="panel-derecho">

        {user ? (
          <div className="usuario-card">

            <div className="avatar grande">
              {user.username
                .charAt(0)
                .toUpperCase()}
            </div>

            <h3>
              {user.username}
            </h3>

            <p>
              @{user.username.toLowerCase()}
            </p>

            <Link
              className="perfil-link"
              to="/profile"
            >
              Ver perfil
            </Link>

            <button
              className="logout"
              onClick={logout}
            >
              Cerrar sesión
            </button>

          </div>
        ) : (
          <div className="usuario-card">
            <h3>¿Nuevo aquí?</h3>
            <p>
              Inicia sesión para comenzar.
            </p>
          </div>
        )}

      </aside>

    </div>
  );
}

export default Home;