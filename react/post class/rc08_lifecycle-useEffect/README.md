
## 🔄 LifeCycleMethods  🔄

🔹 [LifeCycle Metotlarına erişmek için tıklayınız](https://reactjs.org/docs/react-component.html) 

<h3>  🚩 Mounting </h3>
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

  - constructor()

  - static getDerivedStateFromProps()

  - render()

  - ❗ componentDidMount()==> render işlevinden sonra bir kez çalışır.(İsim verme)

  <h3>  🚩 Updating </h3>

  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

  componentDidUpdate() is invoked immediately after updating occurs. ❗ This method is not called for the initial render.
    Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

```
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
👆 setState() öğesini componentDidUpdate() içinde hemen çağırabilirsiniz, ancak yukarıdaki örnekte olduğu gibi bir koşula sarılması gerektiğini unutmayın, aksi takdirde sonsuz bir döngüye neden olursunuz.

  <h3>  🚩 WillMount </h3>

  This method is called when a component is being removed from the DOM:

  ❗ You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.



Class componentlerle özdeşleşmiş bir konudur olarak karşımıza çıkmaktadır.

Componentin oluşturulduktan sonraki meydana geçen (ekleme,güncelleme ve kaldırma) 
her aşamaya 


## useEffect

Class componente meydana gelen lifecycle methodları uygulamamızı sağlar.