import React from 'react';
export const MobBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lenovo" onChange={() => handleFilterChange("lenovo")} /> Apple
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oneplus" onChange={() => handleFilterChange("oneplus")} /> Oneplus
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="realme" onChange={() => handleFilterChange("realme")} /> Realme
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="redmi" onChange={() => handleFilterChange("redmi")} /> Redmi
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oppo" onChange={() => handleFilterChange("oppo")} /> Oppo
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="vivo" onChange={() => handleFilterChange("vivo")} /> Vivo
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="tecno" onChange={() => handleFilterChange("tecno")} /> Tecno
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="nokia" onChange={() => handleFilterChange("nokia")} /> Nokia
      </div>
    </div>
  );
};
export const BasicphonesBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="itel" onChange={() => handleFilterChange("itel")} /> Itel
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="karbonn" onChange={() => handleFilterChange("karbonn")} /> Karbonn
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lava" onChange={() => handleFilterChange("lava")} /> Lava
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="saregama" onChange={() => handleFilterChange("saregama")} /> Saregama
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="nokia" onChange={() => handleFilterChange("nokia")} /> Nokia
      </div>
    </div>
  );
};
export const BrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lenovo" onChange={() => handleFilterChange("lenovo")} /> Lenovo
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="asus" onChange={() => handleFilterChange("asus")} /> Asus
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="acer" onChange={() => handleFilterChange("acer")} /> Acer
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hp" onChange={() => handleFilterChange("hp")} /> HP
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="dell" onChange={() => handleFilterChange("dell")} /> Dell
      </div>
    </div>
  );
};
export const HdtvBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="haier" onChange={() => handleFilterChange("haier")} /> Haier
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lg" onChange={() => handleFilterChange("lg")} /> LG
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="mi" onChange={() => handleFilterChange("mi")} /> Mi
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oneplus" onChange={() => handleFilterChange("oneplus")} /> Oneplus
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="realme" onChange={() => handleFilterChange("realme")} /> Realme
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="redmi" onChange={() => handleFilterChange("redmi")} /> Redmi
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="tcl" onChange={() => handleFilterChange("tcl")} /> TCL
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="treeview" onChange={() => handleFilterChange("treeview")} /> Treeview
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} /> Zebronics
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="xiaomi" onChange={() => handleFilterChange("xiaomi")} /> Xiaomi
      </div>
    </div>
  );
};
export const AndroidtvBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="haier" onChange={() => handleFilterChange("haier")} /> Haier
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="mi" onChange={() => handleFilterChange("mi")} /> Mi
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oneplus" onChange={() => handleFilterChange("oneplus")} /> Oneplus
      </div>
       
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="tcl" onChange={() => handleFilterChange("tcl")} /> TCL
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="xiaomi" onChange={() => handleFilterChange("xiaomi")} /> Xiaomi
      </div>
    </div>
  );
};
export const FitnesswatchBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} /> Apple
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
       
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="ambrane" onChange={() => handleFilterChange("ambrane")} /> Ambrane
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="noise" onChange={() => handleFilterChange("noise")} /> Noise
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fireboltt" onChange={() => handleFilterChange("fireboltt")} /> Fire-Boltt
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fitbit" onChange={() => handleFilterChange("fitbit")} /> Fitbit
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hapipola" onChange={() => handleFilterChange("hapipola")} />Hapipola
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="urban" onChange={() => handleFilterChange("urban")} /> Urban
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="amazfit" onChange={() => handleFilterChange("amazfit")} />Huami Amazfit
      </div>
    </div>
  );
};
export const SoundbarBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="bose" onChange={() => handleFilterChange("bose")} /> Bose
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
        
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lg" onChange={() => handleFilterChange("lg")} /> LG
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div >
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hapipola" onChange={() => handleFilterChange("hapipola")} />Hapipola
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} /> Zebronics
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="jbl" onChange={() => handleFilterChange("jbl")} />JBL
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="marshall" onChange={() => handleFilterChange("marshall")} />Marshall
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="inbase" onChange={() => handleFilterChange("inbase")} /> Inbase
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fingers" onChange={() => handleFilterChange("fingers")} />Fingers
      </div>
    </div>
  );
};
export const BluetoothBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} /> Apple
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="bose" onChange={() => handleFilterChange("bose")} /> Bose
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
        
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="lg" onChange={() => handleFilterChange("lg")} /> LG
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="saregama" onChange={() => handleFilterChange("saregama")} /> Saregama
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hapipola" onChange={() => handleFilterChange("hapipola")} />Hapipola
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} /> Zebronics
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="jbl" onChange={() => handleFilterChange("jbl")} />JBL
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="amazon" onChange={() => handleFilterChange("amazon")} />Amazon
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fingers" onChange={() => handleFilterChange("fingers")} /> Fingers
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="marshall" onChange={() => handleFilterChange("marshall")} />Marshall
      </div>
    </div>
  );
};
export const PowerbankBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} /> Apple
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="ambrane" onChange={() => handleFilterChange("ambrane")} /> Ambrane
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} /> Zebronics
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="mi" onChange={() => handleFilterChange("mi")} /> Mi
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="inbase" onChange={() => handleFilterChange("inbase")} /> Inbase
      </div >
      
     
    </div>
  );
};
export const PortablespeakerBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="bose" onChange={() => handleFilterChange("bose")} /> Bose
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="swiss" onChange={() => handleFilterChange("swiss")} /> Swiss Millitary
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
        
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="saregama" onChange={() => handleFilterChange("saregama")} /> Saregama
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div >
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hapipola" onChange={() => handleFilterChange("hapipola")} />Hapipola
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} /> Zebronics
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="jbl" onChange={() => handleFilterChange("jbl")} />JBL
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="marshall" onChange={() => handleFilterChange("marshall")} />Marshall
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="inbase" onChange={() => handleFilterChange("inbase")} /> Inbase
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fingers" onChange={() => handleFilterChange("fingers")} />Fingers
      </div>
    </div>
  );
};
export const SmartspeakerBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} />Apple
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="amazon" onChange={() => handleFilterChange("amazon")} /> Amazon
      </div>
      
      
    </div>
  );
};
export const WiredBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} /> Apple
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="anker" onChange={() => handleFilterChange("anker")} /> Anker Soundcore
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hyperx" onChange={() => handleFilterChange("hyperx")} /> Hyperx
      </div>
        
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="itel" onChange={() => handleFilterChange("itel")} /> Itel
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="skullcandy" onChange={() => handleFilterChange("skullcandy")} /> Skullcandy
      </div >
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="jbl" onChange={() => handleFilterChange("jbl")} />JBL
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="mi" onChange={() => handleFilterChange("mi")} />Mi
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="fingers" onChange={() => handleFilterChange("fingers")} /> Fingers
      </div>
      
       
    </div>
  );
};
export const EarbudsBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} /> Apple
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} /> Samsung
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="boat" onChange={() => handleFilterChange("boat")} /> Boat
      </div>
       
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="marshall" onChange={() => handleFilterChange("marshall")} /> Marshall
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="noise" onChange={() => handleFilterChange("noise")} /> Noise
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="conekt" onChange={() => handleFilterChange("conekt")} />Conekt
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oneplus" onChange={() => handleFilterChange("oneplus")} />  Oneplus
      </div >
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="realme" onChange={() => handleFilterChange("realme")} />  Realme
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="hapipola" onChange={() => handleFilterChange("hapipola")} />Hapipola
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="oppo" onChange={() => handleFilterChange("oppo")} />  Oppo
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="zebronics" onChange={() => handleFilterChange("zebronics")} />Zebronics
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="jbl" onChange={() => handleFilterChange("jbl")} />  JBL
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="sony" onChange={() => handleFilterChange("sony")} /> Sony
      </div>
    </div>
  );
};
export const StrapsBrandFilter = ({ handleFilterChange }) => {
  return (
    <div style={{fontWeight:"bold",margin:"20px"}}>
      <h3>Brand</h3>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="" onChange={() => handleFilterChange("")} /> All
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="samsung" onChange={() => handleFilterChange("samsung")} />Samsung
      </div>
      
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="apple" onChange={() => handleFilterChange("apple")} />Apple
      </div>
      <div style={{marginBottom:".5rem"}}>
        <input type="radio" name="brand" value="gripp" onChange={() => handleFilterChange("gripp")} /> Gripp
      </div>
      
      
    </div>
  );
};

