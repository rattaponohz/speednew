import React from 'react'

function Result () {
  return (
    <>
    <div class="content1">
        <div class="icondload"><span class="material-symbols-outlined">
            download
            </span>
            <div class="dload">0<small>Mbps</small></div>
        </div>
        <div class="iconup"><span class="material-symbols-outlined">
            upload
            </span>
            <div class="uload">0<small>Mbps</small></div>
        </div>    
        <div class="iconping">Ping
            <div class="ping">0<small>ms</small></div>
        </div>
        <div class="iconjit">Jitter    
            <div class="jiter">0<small>ms</small></div>
        </div>    
    </div>
    </>
  )
}

export default Result