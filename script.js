body {
    margin: 0;
    padding: 0;
    background-color: #006020;
    font-family: Arial, sans-serif;
    color: white;
    display: flex;
    justify-content: center;
}

#game-board {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
}

.hand-container {
    text-align: center;
}

.hand {
    display: flex;
    justify-content: center;
    gap: 10px;
    min-height: 120px;
    flex-wrap: wrap;
}

.card {
    width: 80px;
    height: 120px;
    border-radius: 8px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    user-select: none;
}

#center-playfield {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px 0;
}

/* Card Skins */
.red    { background-color: #ff5555; color: white; }
.blue   { background-color: #5555ff; color: white; }
.green  { background-color: #00aa00; color: white; }
.yellow { background-color: #ffaa00; color: black; }
.wild   { background-color: #222222; color: white; }
.deck-back { background-color: #cc1111; color: yellow; border-style: dashed; }

#status-msg {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    background: rgba(0,0,0,0.4);
    padding: 10px;
    border-radius: 5px;
}
