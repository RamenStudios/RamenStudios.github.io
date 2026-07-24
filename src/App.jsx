import { useState } from 'react'
import { Header } from './components/Header'
import ramenLogo from '/icon.svg'

function App() {
  return (
    <div className="container-fluid gx-0">
      <Header logo={ramenLogo}/>
      <div class="container-lg">
        <a href="/" target="_blank">
          <img src={ramenLogo} className="logo spin" alt="Ramen logo" />
        </a>
      </div>
      <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis lorem sit amet felis volutpat porttitor. Duis pellentesque sollicitudin sem mollis vestibulum. Sed mattis condimentum quam, non accumsan odio consectetur ac. Nulla in velit dolor. Sed cursus tellus at augue tristique elementum. Vivamus id rhoncus mi, sed mattis elit. Aliquam tincidunt leo est, quis gravida mauris tempor quis. Donec et ex nec urna mollis tempus. Integer elementum lobortis condimentum. Nulla in mauris feugiat, venenatis felis et, elementum mauris. Curabitur et elit quam. Nullam ut justo quis lorem accumsan semper.

Pellentesque rhoncus mi et pulvinar tempor. Mauris dapibus eleifend ornare. Donec sollicitudin quam ut cursus varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi molestie sed nisl sit amet porttitor. Donec nibh sapien, iaculis ut rutrum sit amet, pharetra sed nibh. Nunc libero nisi, molestie ut rhoncus id, imperdiet in purus. Integer volutpat diam et tortor finibus volutpat faucibus sed ex.

Curabitur et quam urna. Phasellus consequat blandit sem ac porta. Vestibulum gravida tristique nisi dignissim mollis. Maecenas accumsan justo ornare eros bibendum, sit amet finibus tellus ornare. Suspendisse tempor rutrum dolor, in ultricies tortor ultricies nec. Sed lorem lectus, faucibus a commodo at, interdum sed libero. Nam accumsan dui vel auctor malesuada. Proin eu elit scelerisque, placerat metus non, fermentum nulla. Integer efficitur massa ac luctus eleifend. Sed ut ex pellentesque, dapibus neque ut, gravida nunc.

Cras mauris neque, dictum quis congue in, pharetra eu lectus. Proin eget velit et purus imperdiet volutpat non suscipit turpis. Donec consectetur vulputate neque a maximus. Cras nisi mauris, vehicula quis eros non, posuere condimentum lectus. In malesuada pellentesque odio, nec commodo augue finibus eu. Maecenas dignissim, purus sit amet euismod dapibus, quam risus aliquet massa, ut sollicitudin leo ipsum a ligula. Vivamus at suscipit purus, eget semper velit. Suspendisse pulvinar nibh at erat tristique consequat. Suspendisse vitae lacinia tortor. Nam neque sem, egestas sit amet efficitur a, bibendum id nulla. Nulla imperdiet luctus dapibus. Aliquam et libero id libero rhoncus sollicitudin in et elit. Nam dignissim lacus dui, sit amet lobortis nibh congue eu.

Etiam auctor eros in sem imperdiet placerat vel nec est. Fusce turpis nibh, varius sit amet dignissim non, accumsan id ante. Cras quis ligula ut risus varius ultrices at non nulla. Duis tincidunt eleifend hendrerit. Fusce porta maximus erat. Aliquam congue velit molestie tellus pharetra, nec mollis nisl tempor. Integer pellentesque condimentum sem, in interdum eros sagittis at. Morbi ultrices magna nec tellus fermentum dapibus. Suspendisse pharetra urna non tortor ullamcorper fermentum. Aenean tempus nunc urna, a dignissim sapien congue ac. </h1>
    </div>
  )
}

export default App
