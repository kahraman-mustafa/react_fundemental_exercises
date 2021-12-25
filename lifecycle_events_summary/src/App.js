import React from 'react';

// Pure Component, props ile gelen toggle özelliğine göre "update" statei değişir
// Yani sayfada bu Component gösterilirken stateine bağlı olarak içeriğinin tekrar
//  renderlanıp renderlanmayacağı props.toggle değişkenine bağlıdır.
// !! Pure Component, sadece state değişkenlerinin değeri değiştiğinde render() metodunu tekrar çağırır
// !!   state değişmezse, render() çağrılmaz
class Pure1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      update: props.toggle,
    };
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'mediumseagreen' }}>Pure1: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

// !! Props ile state değişkeni ataması constructor() metodu dışında da olsa, props değişince state değişir, render() metodu çağrılır
class Pure2 extends React.PureComponent {
  
  state = {
    update: this.props.toggle
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'red' }}>Pure2: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

// Stateless isminde props parametreli bir fonksiyon olarak tanımlanan React UI öğesi
// !! Stateless Functionlar, her props değişiminde re-render olur
const Stateless = props => (
  <strong>
    <span style={{ color: 'orange' }}>Stateless: </span>
    {new Date().getSeconds().toString()}
  </strong>
);

// Normal Component, props ile gelen toggle özelliğine göre "update" statei değişir
// Yani sayfada bu Component gösterilirken stateine bağlı olarak içeriğinin tekrar
//  renderlanıp renderlanmayacağı props.toggle değişkenine bağlıdır.
// !! Props ile state değişkeni ataması -constructor() metodu içinde ya da dışında- olursa, 
// !!   props değişmese bile her atamada state de yenilenir, render() metodu tekrar çağırılır 
class Normal1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      update: props.toggle,
    };
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'dodgerblue' }}>Normal1: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

// Normal Component, props a bağlı state yok ise
// !! Props a bağlı state değişkeni yoksa, props değişmese bile her atamada render() çağrılır
class Normal2 extends React.Component {
  
  render() {
    return (
      <strong>
        <span style={{ color: 'green' }}>Normal2: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

/* 
  Basit bir PureComponent vs Stateless Function vs Component uygulaması 
    - uygulamada state olarak toggle değişkeni tanımlanmıştır.
    - componentDidMount() metodu ile DOM'a ilk mounttan sonra 
      toggle state değişkeninin değeri her 1000 milisaniyede bir değişecek/değişmeyecek şekilde ayarlanır
    - toggle state değişkeni, App componentinin alt componentleri için bir "props" değişkenidir
    - Alt componentlerin ikisi Pure, biri Stateless, ikisi de normal Componenttir.
    - toggle stateinin değerine bağlı olarak toggle propsunun her değişiminde/değişmeyişinde
      alt componentlerin tekrar render() edip etmediği görülür
    - Bunu anlamak için her alt component içinde {new Date().getSeconds().toString()} kod parçası bulunur
      eğer tekrar render() edilmişse, saniye değeri ekranda güncellenmiş gözükür.
  
  Denemelerden anlaşıldığı kadarıyla;
    - Pure Component, sadece state değişkenlerinin değeri değiştiğinde render() metodunu tekrar çağırır; 
      state değeri değişmezse, render() çağrılmaz.
      Props ile state değişkeni atamasının constructor() metodu dışında ya da içinde olması etkilemez.
    - Stateless Functionlar, state içermez; her props değişiminde de re-render olur
    - Normal Componentlerde; Props ile state değişkeni ataması varsa props değişmese bile her atamada state de tekrar atanır, 
      render() metodu tekrar çağırılır.
      Props ile state değişkeni atamasının constructor() metodu dışında ya da içinde olması etkilemez.
*/
class App extends React.Component {
  state = { toggle: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ toggle: true });
      // this.setState({ toggle: !this.state.toggle })
    }, 1000);
  }

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <Pure1 toggle={toggle} />
        <br />
        <Pure2 toggle={toggle} />
        <br />
        <Stateless toggle={toggle} />
        <br />
        <Normal1 toggle={toggle} />
        <br />
        <Normal2 toggle={toggle} />
        <br />
      </div>
    );
  }
}

export default App;
