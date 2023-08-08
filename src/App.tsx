import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_batmovel_tumbler_2008_com_boneco_1_24_jada_toys_9622_2_fee9c45499f6fbfee52723d9eb827b22.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
