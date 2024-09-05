import { useEffect, useContext, useState } from "react";
import Select from "react-select";
import { OptionsContext } from "../contexts/options";

const OptionsSticker = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "black",
      color: "white",
      borderColor: "#9e9e9e",
      minHeight: "33px",
      height: "40px",
      width: "455px",
      marginLeft: "10px"
      // boxShadow: state.isFocused ? null : null,
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),

    indicatorSeparator: (state) => ({ display: "none" }),
    menuList: (provided, state) => ({ ...provided, backgroundColor: "black", }),
    indicatorContainer: (provided, state) => ({ ...provided, height: "30px",}),
    option: (provided, state) => ({ ...provided, backgroundColor: "black"}),
  };

  const {
    handleChangeSticker,
    handleChangeStickerPrice,
    stickerOptions,
    getStickers,
    stickerImage,
    stickerName,
    stickerPrice,
  } = useContext(OptionsContext);
  const [stickerList, setStickerList] = useState([]);

  useEffect(() => {
    if (getStickers) getStickers();
  }, []);

  useEffect(() => {
    let data = [];
    stickerOptions.forEach((e) => {
      data.push({
        label: (
          <div style={{ display: "flex", backgroundColor:"black"}}>
            <img src={e.icon_url} height="32px" width="32px" />
            <div style={{ margin: "7px 0 0 10px", backgroundColor: "black" }}>{e.title}</div>
          </div>
        ),
        value: {
          id: e.id,
          title: e.title,
          image: e.icon_url,
          price: e.plans[0].price,
        },
      });
    });
    console.log(data);
    setStickerList(() => [...stickerList, ...data]);
  }, [stickerOptions]);

  return (
    <>
      <div style={{ width: "455px", marginTop: "10px", marginLeft: "10px"}}>
        <label style={{float: 'left', marginBottom: '10px', marginLeft: '10px'}}>Sticker</label>
        {stickerList && (
          <Select
            styles={customStyles}
            options={stickerList}
            onChange={handleChangeSticker}
            isSearchable={false}
            placeholder={
              <div style={{ display: "flex", color: "white" }}>
                <img src={stickerImage} height="32px" width="32px" />
                <div style={{ margin: "7px 0 0 10px",}}>{stickerName}</div>
              </div>
            }
          ></Select>
        )}
      </div>
      <div className="text" style={{display: "flex", flexDirection: "column", alignItems:"flex-start", marginTop:"10px"}}>
        <label htmlFor="StickerPrice">Sticker Price</label>
        <input
          type="text"
          name="StickerPrice"
          id="StickerPrice"
          style={{ width: "450px", fontSize: "20px" }}
          value={stickerPrice}
          onChange={handleChangeStickerPrice}
        />
      </div>
    </>
  );
};

export default OptionsSticker;
