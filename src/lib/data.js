const imageBankData = [
  {
    name: "cak lontong",
    url: "https://cdn0-production-images-kly.akamaized.net/VDo1sws18A-dzcwb80JeBmtG2uk=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/907840/original/070482300_1435034502-cak_lontong02.jpeg",
  },
  {
    name: "raditya dika",
    url: "https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2019/09/raditya-dika.jpg",
  },
  {
    name: "deddy corbuzier",
    url: "https://disk.mediaindonesia.com/thumbs/600x400/news/2021/01/680d49a3bca90687a94c3675ec0b8b7a.jpg",
  },
  {
    name: "uus",
    url: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/07/11/630556539.jpg",
  },
  {
    name: "sule",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sule_Sutisna%2C_Ini_Talk_Show%2C_07.21.jpg",
  },
  {
    name: "komeng",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Komeng%2C_Bukanya_Tuh_di_Sini_-_Hesti_Kerepotan%2C_Adul_Malah_Cuek.jpg",
  },
  {
    name: "nunung",
    url: "https://cdn0-production-images-kly.akamaized.net/CRBcBA_W14lvXAi5t7cKF2VspZ8=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1096857/original/033816000_1451387648-Nunung_Srimulat-3.jpg",
  },
  {
    name: "parto",
    url: "https://cloud.jpnn.com/photo/arsip/watermark/2020/01/05/parto-patrio-foto-instagramedy-supono-72.jpg",
  },
  {
    name: "denny cagur",
    url: "https://assets.pikiran-rakyat.com/crop/0x27:822x629/x/photo/2021/02/02/2096177714.png",
  },
  {
    name: "opie kumis",
    url: "https://cdn1-production-images-kly.akamaized.net/TgN4vWIoNRy0xjiIuJ54vQ9WpNM=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/627284/original/opie-kumis-140126b.jpg",
  },
  {
    name: "andre taulany",
    url: "https://i.pinimg.com/564x/6f/a7/be/6fa7be4e6203640d5caa8fe14a782afa.jpg",
  },
  {
    name: "aziz gagap",
    url: "https://cdn-2.tstatic.net/belitung/foto/bank/images/aziz-gagap_20180323_180716.jpg",
  },
  {
    name: "andhika pratama",
    url: "https://cdn0-production-images-kly.akamaized.net/zT7Xu8lh9gMF8yYaiRtMps6ctxE=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3312499/original/072128900_1606831474-Andhika_Pratama_2.jpg",
  },
  {
    name: "gading marten",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gading_Marten_on_Ini_Talkshow_Netmediatama.jpg/220px-Gading_Marten_on_Ini_Talkshow_Netmediatama.jpg",
  },
  {
    name: "ruben onsu",
    url: "https://img.okezone.com/content/2022/04/14/33/2579239/ruben-onsu-digugat-rp100-miliar-babak-baru-sengketa-kasus-brand-ayam-geprek-KoG9Te5hTp.jpg",
  },
  {
    name: "olga syahputra",
    url: "https://cdn0-production-images-kly.akamaized.net/SKxKutTh0OMjvBoMNH0PZtc57L4=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/838377/original/028199000_1427469658-Olga-Syahputra-5.jpg",
  },
  {
    name: "iko uwais",
    url: "https://encrypted-tbn 2.gstatic.com/images?q=tbn:ANd9GcS_VezL-V9U9g7knsCDJqQl7X-TbLIE-q2Pn7SiTmrUY4jGf_y0",
  },
  {
    name: "billy syahputra",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Billy_Syahputra_on_Ini_Sahur_Netmediatama.jpg",
  },
  {
    name: "amanda manopo",
    url: "https://assets.pikiran-rakyat.com/crop/0x29:790x614/x/photo/2021/03/02/3359334401.jpg",
  },
  {
    name: "rizky febian",
    url: "https://cloud.jpnn.com/photo/arsip/normal/2021/09/10/rizky-febian-foto-falcon-pictures-fwaqs-l6w2.jpg",
  },
  {
    name: "baim wong",
    url: "https://img.okezone.com/content/2021/10/15/33/2486778/buntut-kasus-kakek-suhud-baim-wong-kehilangan-300-ribu-subscribers-Rq6SSJTV1b.jpg",
  },
  {
    name: "luna maya",
    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDXRn8iXQcyyLCihIDDX6ler5Gm5_vqa4eMtDsTqwx-cMn2Sa2",
  },
  {
    name: "jefri nichol",
    url: "https://awsimages.detik.net.id/community/media/visual/2020/12/17/jefri-nichol-1_43.jpeg?w=700&q=90",
  },
  {
    name: "yayan ruhian",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Yayan_Ruhian_on_Ini_Talkshow_Netmediatama.jpg",
  },
  {
    name: "joe taslim",
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6GfEcaUcEPFAGXUDLDl-rtwm4gVLKrVCfrPZ8PeDz7LGZJqQ9",
  },
  {
    name: "vino g bastian",
    url: "https://akcdn.detik.net.id/visual/2014/10/15/a31dde52-73b9-407c-a7ed-2b880dc36a46_169.jpg?w=650",
  },
  {
    name: "aliando syarief",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Aliando_Syarief%2C_Gogirl%21_TV%2C_00.05.jpg",
  },
  {
    name: "chicco jerikho",
    url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQwDJeN-jkfGJqlxoqfK_OQPC-nJJYJNO5JKWSNhvTpXGmK0lHYGqs8nF8mINeu_bNW",
  },
  {
    name: "tora sudiro",
    url: "https://www.nusabali.com/article_images/67447/tora-sudiro-tampil-tanpa-tato-800-2020-01-21-135150_0.jpg",
  },
  {
    name: "rio dewanto",
    url: "https://media.tabloidbintang.com/files/thumb/riodewanto-altov.JPG/745",
  },
  {
    name: "ricky harun",
    url: "https://ath2.unileverservices.com/wp-content/uploads/sites/10/2022/04/05171622/Gaya-Rambut-Ricky-Harun-Curtain-Hair-2-e1649163779698.jpg",
  },
  {
    name: "yuki kato",
    url: "https://cdn0-production-images-kly.akamaized.net/NOfsk8ruJJY8zlAG_isH17PXGo4=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1744119/original/17fd0dc844f9de3461e57ba3bea5f4c63_.JPG",
  },
  {
    name: "ariel tatum",
    url: "https://media.suara.com/pictures/970x544/2020/06/05/31587-ariel-tatum.jpg",
  },
  {
    name: "omesh",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Ananda_Omesh_on_Ini_Talkshow_Netmediatama.jpg",
  },
  {
    name: "desta",
    url: "https://statik.tempo.co/data/2021/07/22/id_1036752/1036752_720.jpg",
  },
  {
    name: "vincent",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Vincent_Ryan_Rompies_Tonight_Show_Netmediatama.jpg",
  },
  {
    name: "haji bolot",
    url: "https://asset.kompas.com/crops/SkG0hio8cfWW9gW5eXAOPyfveho=/269x149:961x611/750x500/data/photo/2020/07/25/5f1bf3a5821a8.png",
  },
  {
    name: "dimas anggara",
    url: "https://awsimages.detik.net.id/community/media/visual/2016/09/07/3de15cbc-e6b0-439d-9be7-2551793389ee_43.jpg?w=700&q=90",
  },
  {
    name: "darto",
    url: "https://upload.wikimedia.org/wikipedia/id/b/b6/Darto2.jpg",
  },
  {
    name: "angel karamoy",
    url: "https://media.suara.com/pictures/653x366/2021/10/28/40193-angel-karamoy-instagramatrealangelkaramoy.jpg",
  },
  {
    name: "bopak castello",
    url: "https://awsimages.detik.net.id/customthumb/2014/02/21/1303/bopak2dlm.jpg?w=700&q=90",
  },
  {
    name: "adul",
    url: "https://cdns.klimg.com/resized/476x/selebriti/Adul_Abdul_Latief/p/adul-abdul-latief-067.jpg",
  },
  {
    name: "haruka",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Kaleidoskop_Ini_Talkshow_2016_-_Keren%21_Ini_Talkshow_Sampai_ke_Negeri_Sakura_2m20s.jpg",
  },
  {
    name: "arafah",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Arafah_Rianti%2C_Arafah_Rianti%2C_01.30.jpg",
  },
  {
    name: "tukul arwana",
    url: "https://cdn0-production-images-kly.akamaized.net/atYSKCkMRqqlv9i7O_dYqukZlXY=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/698326/original/tukul.jpg",
  },
  {
    name: "jessica iskandar",
    url: "https://cdn-asset.jawapos.com/wp-content/uploads/2020/10/jessica-iskandar-jaga_diri-560x420.jpg",
  },
  {
    name: "arie kriting",
    url: "https://img.inews.co.id/media/600/files/inews_new/2019/12/13/Arie_Kriting.jpg",
  },
  {
    name: "wika salim",
    url: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/23/1984878333.jpg",
  },
  {
    name: "rina nose",
    url: "https://cdn0-production-images-kly.akamaized.net/YlyoYTKeM7KALZpIfDB-1vAb0nc=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3037310/original/043132300_1580439767-Rina_Nose_IG4.jpg",
  },
  {
    name: "dewi gita",
    url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1567586676/bimqrrkjiejqk4ifpshu.jpg",
  },
  {
    name: "wendy cagur",
    url: "https://asset.kompas.com/crops/-LqQUy50iwCWEkChAtTBBl_Nnz0=/0x67:800x600/750x500/data/photo/2018/12/10/1511026457.jpg",
  },
  {
    name: "gisella anastasa",
    url: "https://cdn-2.tstatic.net/banjarmasin/foto/bank/images/gisella-anastasia_000.jpg",
  },
  {
    name: "ayya renita",
    url: "https://akcdn.detik.net.id/visual/2021/02/14/ayya-renita-3_169.jpeg?w=650",
  },
  {
    name: "arie untung",
    url: "https://static.republika.co.id/uploads/images/inpicture_slide/013784500-1617985542-5c3bc5243cb0c-arie-untungjpg.jpg",
  },
  {
    name: "ivan gunawan",
    url: "https://yt3.ggpht.com/ytc/AKedOLTLl2YBLb5-okTHLT4zvYX4rDNQU8s_m3ck7_JS=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "kenta",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kenta_Bukanya_Tuh_di_Sini.jpg",
  },
  {
    name: "lee",
    url: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/01/16/1479190770.jpg",
  },
  {
    name: "mpok atiek",
    url: "https://cdn1-production-images-kly.akamaized.net/J9VooNzgSRLNBhWVp1JAU1VLyFQ=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2881760/original/044588700_1565776195-60201496_2294243933957383_534490032529939008_n.jpg",
  },
  {
    name: "ayu tingting",
    url: "https://asset-a.grid.id/crop/0x210:795x754/360x240/photo/2020/05/08/4113474274.jpg",
  },
  {
    name: "indra bekti",
    url: "https://cdn0-production-images-kly.akamaized.net/tKZWWxAxyabSMCD1crNVqDVOyZc=/0x208:1326x955/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2850166/original/033402100_1562812298-indra_bekti-20190710-004-daniel.jpg",
  },
  {
    name: "nikita mirzani",
    url: "https://cdn1-production-images-kly.akamaized.net/AKCp_7YlNzt81gkufUxZIkSbmlc=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1451027/original/014181100_1483088995-Nikita_Mirzani-7.jpg",
  },
  {
    name: "gilang dirga",
    url: "https://cdn-asset.jawapos.com/wp-content/uploads/2020/09/gilang-dirga-560x420.jpg",
  },
  {
    name: "dewi perssik",
    url: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2021/12/18/foto-cover-dewi-persikjpg-20211218111821.jpg",
  },
  {
    name: "bedu",
    url: "https://awsimages.detik.net.id/community/media/visual/2016/12/27/01138c7b-7d47-4792-8abf-7bce6cfd9eff_43.jpg?w=700&q=90",
  },
  {
    name: "abdel",
    url: "https://thumb.viva.co.id/media/frontend/tokoh/2017/09/22/59c4deeaa01d0-abdel-achrian_216_287.jpg",
  },
  {
    name: "aming",
    url: "https://asset.kompas.com/crops/Akl5biIUBvXXtmGuKfTjk00954w=/83x0:928x563/750x500/data/photo/2018/07/01/809381307.png",
  },
  {
    name: "mpok alpa",
    url: "https://cdn0-production-images-kly.akamaized.net/-WmILPs3H5oV8vIWiYFrL5VxsvY=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1843506/original/041799900_1516775472-Mpok_Alpa__6_.jpg",
  },
  {
    name: "caesar",
    url: "https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/05/08/198194/live-tiktok-24-jam-non-stop-caisar-yks-dituding-konsumsi-sabu-220508t.jpg",
  },
  {
    name: "jeremy teti",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jeremy_Teti_Waktu_Indonesia_Bercanda_Netmediatama_2017.jpg/220px-Jeremy_Teti_Waktu_Indonesia_Bercanda_Netmediatama_2017.jpg",
  },
  {
    name: "zaskia gotik",
    url: "https://sumeks.co/assets/foto/2020/01/zaskiagotik.jpg",
  },
  {
    name: "soimah",
    url: "https://disk.mediaindonesia.com/thumbs/600x400/news/2019/03/e9ea779cd5facc211fc300e19474e3e9.jpg",
  },
  {
    name: "daus separo",
    url: "https://media.suara.com/pictures/970x544/2020/09/03/50709-daus-separo.jpg",
  },
  {
    name: "daus mini",
    url: "https://parboaboa.com/data/foto_berita/mobil-daus-mini.webp",
  },
  {
    name: "vega darwanti",
    url: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/04/24/4229324257.jpg",
  },
  {
    name: "vicky prasetyo",
    url: "https://static.republika.co.id/uploads/images/inpicture_slide/066905900-1625138289-5c36e03801650-vicky-prasetyoj.jpg",
  },
  {
    name: "jenita janet",
    url: "https://img.inews.co.id/media/822/files/inews_new/2021/12/06/jenita_janet.jpg",
  },
  {
    name: "mala barbie",
    url: "https://cdn0-production-images-kly.akamaized.net/WG7kPARkpDHdm6gX9HM2S75AmUY=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3200129/original/075858200_1596636157-75430317_1023932747941199_2216039335278905655_n.jpg",
  },
  {
    name: "dono",
    url: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/09/30/2373331292.jpg",
  },
  {
    name: "kasino",
    url: "https://www.biografiku.com/wp-content/uploads/2013/01/KASINO.jpg",
  },
  {
    name: "indro",
    url: "https://media.suara.com/pictures/970x544/2019/08/31/15591-indro-warkop.jpg",
  },
  {
    name: "adipati dolken",
    url: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/08/20/2175609365.jpg",
  },
  {
    name: "ence bagus",
    url: "https://www.themoviedb.org/t/p/w235_and_h235_face/xac6cCVJOmp4QMVUDvsCBh4h3Wn.jpg",
  },
  {
    name: "abimana aryasatya",
    url: "https://img.okezone.com/content/2021/05/05/33/2406195/kini-jadi-aktor-sukses-abimana-aryasatya-ternyata-tak-pernah-lulus-sd-YWQnSferqz.jpg",
  },
  {
    name: "babe cabita",
    url: "https://media.suara.com/pictures/653x366/2021/08/31/29061-babe-cabita.jpg",
  },
  {
    name: "mongol",
    url: "https://awsimages.detik.net.id/community/media/visual/2021/08/24/mongol-stres-1_169.jpeg?w=1200",
  },
  {
    name: "reza rahardian",
    url: "https://img.okezone.com/content/2022/06/07/33/2607300/viral-video-eva-celia-berdansa-dengan-ayah-sambung-tangan-reza-rahadian-bikin-salfok-kLrYCQWLGh.jpg",
  },
  {
    name: "roy marten",
    url: "https://upload.wikimedia.org/wikipedia/id/e/e6/Roy-marten.jpg",
  },
  {
    name: "marsha timothy",
    url: "https://img.okezone.com/content/2021/11/25/33/2507421/biodata-dan-agama-marsha-timothy-calon-pemeran-utama-wanita-terfavorit-di-imaa-2021-frmDD4g7or.jpeg",
  },
  {
    name: "denny sumargo",
    url: "https://assets.pikiran-rakyat.com/crop/146x0:1141x787/x/photo/2021/07/13/2129328693.jpg",
  },
  {
    name: "vicky nitinegoro",
    url: "https://jurnalkepri.com/wp-content/uploads/2018/12/images-29.jpeg",
  },
  {
    name: "dion wiyoko",
    url: "https://cdn.antaranews.com/cache/360x240/2021/08/22/AIRism-Dion-Wiyoko.jpg",
  },
  {
    name: "richard kyle",
    url: "https://akcdn.detik.net.id/visual/2020/09/10/richard-kyle_169.jpeg?w=650",
  },
  {
    name: "rikas harsa",
    url: "https://1.bp.blogspot.com/-19-Q2eSF0tA/WtYoA1a85HI/AAAAAAAACmk/ZFkwkcfArJYolDPIjnmv0UnGF3V1q4cJACLcBGAs/s1600/Biodata%2Bagama%2BRikas%2BHarsa.jpg",
  },
  {
    name: "marshall sastra",
    url: "https://image.akurat.co/images/uploads/images/akurat_20181125115145_93M3W2.jpg",
  },
  {
    name: "bunga citra lestari",
    url: "https://asset-a.grid.id/crop/8x0:393x254/945x630/photo/2021/03/04/foto-cover-salah-satu-potret-bu-20210304053333.jpg",
  },
  {
    name: "dimas aditya",
    url: "https://www.themoviedb.org/t/p/w500/jzy7OlHRiheBRk5zLDnCI0QxAYc.jpg",
  },
  {
    name: "lukman sardi",
    url: "https://asset.kompas.com/crops/edLWbE2xac-lEa5LR-CcHvOvRYg=/0x0:0x0/750x500/data/photo/2013/05/10/1405126-lukman-sardi-p.jpg",
  },
  {
    name: "titi kamal",
    url: "https://cdn0-production-images-kly.akamaized.net/OKphgbSRrR0qiG_1ZgF6p-IQmdw=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3068116/original/060778800_1583316894-d.jpg",
  },
  {
    name: "dicky chandra",
    url: "https://cdns.klimg.com/resized/476x/selebriti/Dicky_Chandra/p/dicky-chandra-117.jpg",
  },
  {
    name: "melky bajaj",
    url: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2019/01/15/3527790945.jpg",
  },
  {
    name: "raisa",
    url: "https://c8d8q6i8.stackpathcdn.com/wp-content/uploads/2018/06/Raisa-Andriana-Contact-Information.jpg",
  },
  {
    name: "agnez monika",
    url: "https://images.harpersbazaar.co.id/unsafe/0x0/smart/media/body_800861778e3242f5aa6ad62b3abcae84.jpg",
  },
  {
    name: "citra kirana",
    url: "https://www.womanindonesia.co.id/wp-content/uploads/2022/04/Makeup1.jpg",
  },
  {
    name: "maudy ayunda",
    url: "https://www.womanblitz.com/images/blog/cantik-dan-berprestasi-inilah-kebiasaan-baik-yang--0-L8BWi.jpg",
  },
  {
    name: "cinta laura",
    url: "https://cdn0-production-images-kly.akamaized.net/NCs8KmRUtRci5uz86BL2wRHmtyI=/77x0:1050x1297/469x625/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3396394/original/027507700_1615213303-123567420_151719573351574_6330641249924755931_n.jpg",
  },
  {
    name: "chelsea islan",
    url: "https://thumb.viva.co.id/media/frontend/tokoh/2017/04/04/58e35612d96bf-chelsea-islan_216_287.jpg",
  },
  {
    name: "velove vexia",
    url: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/11/23/3958333718.jpg",
  },
  {
    name: "natasha wilona",
    url: "https://cdn1-production-images-kly.akamaized.net/yqrZEhmSpMMnpG__BviYtPIDzD4=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3359168/original/052630600_1611625997-Natasha_Wilona_0.jpg",
  },
  {
    name: "syifa hadju",
    url: "http://globalradio.co.id/uploads/news/WhatsApp%20Image%202021-02-03%20at%2016.29.20.jpeg",
  },
  {
    name: "angelica pieters",
    url: "https://cdn.asiatatler.com/generationt/i/ap/2019/09/05112001-angel-pieters_cover_1333x2000.jpg",
  },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },
  // {
  //   name: "",
  //   url: "",
  // },

  
];

export default imageBankData;
