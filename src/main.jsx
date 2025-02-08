import React from "react";

import { createRoot } from 'react-dom/client'
import './index.css'
import Random from './Components/RandomPasswordGenerator/Random'


createRoot(document.getElementById('root')).render(
  <Random/>
)
