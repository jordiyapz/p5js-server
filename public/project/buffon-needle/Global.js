const Global = {
  scale: 10,                // [1..200] Skala penggambaran
  rowDist: 5,               // [2..570/scale] Jarak garis di kertas
  needleLength: 3,          // [1..rowDist) Panjang jarum
  fps: 60,                  // [1..Inf) Batas maksimum refresh per detik (nilai maksimum tergantung prosesor)
  batchSize: 10,             // [1..Inf) Banyaknya jarum yang dijatuhkan bersamaan
  numOFMaxNeedleShow: 1000  // [0..Inf) Banyaknya jarum yang di-render
};

/** Tips:
 *  Semakin besar nilai 'numOFMaxNeedleShow', maka render bisa lebih lambat dan memori yang terpakai lebih banyak.
 *  Nilai 'fps' mungkin tidak pernah tercapai, tergantung kemampuan prosesor.
 *  Apabila nilainya diperkecil, maka refresh akan lebih lambat, yang artinya simulasi akan lebih lambat pula.
 *  Usahakan needleLength < rowDist.
 *  Scale yang masih memenuhi syarat seharusnya tidak mempengaruhi hasil simulasi. Hanya rendering.
 */