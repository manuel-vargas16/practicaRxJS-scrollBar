import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
import "./styles.css";

const texto = document.createElement("div");

texto.innerHTML = `<h1>Hello Vanilla!</h1>
<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tellus sem, efficitur nec ipsum in, tincidunt tempor neque. Integer dignissim ut urna id semper. Aenean dignissim erat sed nunc congue lacinia. Nunc convallis tincidunt mollis. Phasellus justo lacus, sagittis eu convallis et, iaculis ac nunc. Duis a tortor eros. Quisque vitae laoreet nisi. Vestibulum ac leo ac justo consectetur efficitur in sed felis. Donec eros orci, volutpat quis scelerisque eu, congue a tellus. Praesent in felis at metus suscipit gravida. Nam iaculis tempor placerat. Vestibulum laoreet maximus justo.
<br/><br/>
Ut malesuada tortor vitae semper sollicitudin. Aliquam sollicitudin hendrerit viverra. Proin malesuada, diam sed molestie aliquam, mauris eros cursus sapien, eu sodales nisl libero quis ligula. Pellentesque posuere congue diam quis scelerisque. Cras pretium nisl ut purus imperdiet, ac tincidunt metus dictum. Sed consequat blandit quam vitae sollicitudin. Suspendisse finibus vehicula congue. Nullam facilisis tortor ac erat consequat, malesuada dignissim risus fringilla. Proin accumsan risus eu aliquam accumsan. Nam suscipit id ipsum eget euismod. Nullam arcu urna, gravida id accumsan vitae, vulputate vel sem. Donec vehicula placerat malesuada. Phasellus non nunc libero. Morbi eros ipsum, commodo at nisl vitae, lacinia dictum nunc. Aliquam at nisi tellus. Praesent elementum, purus lobortis porta auctor, diam erat porttitor felis, a mattis leo turpis at odio.
<br/><br/>
Quisque varius malesuada ex, nec consequat nulla suscipit ac. Mauris mattis tortor ut massa aliquet cursus. Etiam pharetra suscipit ex sit amet luctus. Mauris ac convallis neque, sed finibus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tortor massa, sagittis vitae tristique placerat, bibendum blandit est. Vestibulum aliquam purus eget ultrices scelerisque. Praesent dolor tellus, posuere malesuada nulla nec, molestie ultrices ante. Quisque tristique, metus nec dictum interdum, risus justo condimentum risus, eget elementum massa dui at ipsum. Sed bibendum tortor sed scelerisque ultrices. In tempus non lacus eget hendrerit. Mauris aliquet varius nibh vel sagittis. Morbi varius nisi a dictum efficitur. Sed non scelerisque metus, at posuere tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br/><br/>
Curabitur luctus finibus lectus, id luctus massa mollis sed. Maecenas pellentesque nisl laoreet scelerisque pulvinar. Sed sit amet varius purus. Fusce ut efficitur diam. Nullam at diam quis ante convallis ultricies. Donec semper tincidunt justo, ac bibendum felis malesuada at. Etiam ut ultrices magna. Proin vitae nisi condimentum leo pulvinar hendrerit ut eget nulla. Ut pellentesque luctus felis non maximus. Aliquam pulvinar dui lorem, nec venenatis nibh gravida eget.
<br/><br/>
Vestibulum mattis dictum ex ac finibus. Nulla erat magna, tincidunt vitae aliquam sollicitudin, auctor id justo. Praesent auctor tortor vel pulvinar mollis. Vestibulum vel malesuada leo. Cras luctus venenatis facilisis. Phasellus vitae mollis ipsum, non ullamcorper enim. Phasellus hendrerit neque sapien, mattis elementum ligula luctus ut. Fusce vitae neque metus. Donec aliquet cursus nisl, eget condimentum eros. Proin aliquet, felis ut pellentesque bibendum, dolor urna varius enim, non mollis diam augue sed ex.
</div>
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

/**
 * @clientHeight - Ancho de lo que somos capaces de desplegar la pantalla sin hacer scroll
 * @scrollHeight - Todo el contenido HTML que se encuentra ahí y sobre el cual se puede hacer scroll
 * @scrollTop - Ayuda a determinar la posición en la que estamos en relación al top
 */
const calcularPorcentajeScroll = (event) => {
  const {
    clientHeight,
    scrollHeight,
    scrollTop
  } = event.target.documentElement;

  console.log({ clientHeight, scrollHeight, scrollTop });

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
