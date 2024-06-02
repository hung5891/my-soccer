document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
  const cart = [];
  const cartCountElement = document.querySelector("#cart-count");
  const mainContent = document.querySelector("#main-content");

  const homeContent = `
  <section class="featured-products">
  <div class="title">
  <h2>FootyGear & Fields
  </h2>
  </div>
  <div class="product-grid">
    <div id="soccer-clothes" class="product">
        <img src="https://photo.znews.vn/w660/Uploaded/spluaaa/2024_04_05/2024_manchester_uniteds_antony_reacts_891680632.jpg" alt="shop 1" />
        <h3>Trần Nhật Quân</h3>
        <h3>Quần Áo Thể Thao</h3>
    </div>
    <div id="soccer-shoes" class="product">
        <img src="https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/12/7/190ec53b-bcaa-4a99-9b9f-4db695901c89-17019224659581173761427.jpg" alt="shop 2" />
        <h3></h3>
        <h3>Phạm Quang Thắng</h3>
        <h3>Giày Thể Thao</h3>
    </div>
    <div id="soccer-a" class="product">
        <img src="https://image.anninhthudo.vn/w1000/Uploaded/2024/wopkplw/2023_03_28/alejandro-garnacho-4503-4487.jpg" alt="shop 3" />
        <h3>Lê Tuấn Anh</h3>
        <h3>Phụ Kiện Thể Thao</h3>
    </div>
    <div id="soccer-service" class="product" >
        <img src="https://assets.goal.com/images/v3/bltd600d19d29418972/GettyImages-1814952270.jpg?auto=webp&format=pjpg&width=3840&quality=60" alt="shop 4" />
        <h3>Phạm Như Khải</h3>
        <h3>Dịch Vụ Sân Bóng</h3>
    </div>
    <!-- Thêm nhiều sản phẩm nếu cần -->
  </div>
</section>
  `;

  const productsContent1 = `
    <section class="product-list">
      <h2>Tất cả sản phẩm</h2>
      <ul>
        <li>
          <a href="#" class="product-link" data-product="Vé Xem Bóng Đá" data-price="500000" data-img="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg">
            <img src="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg" alt="Product 1" />
            <h3>Vé Xem Bóng Đá</h3>
            <p>500.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Vé Xem Bóng Đá" data-price="500000" data-img="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Sân Bóng 7" data-price="1200000" data-img="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg">
            <img src="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg" alt="Product 2" />
            <h3>Sân Bóng 7</h3>
            <p>1.200.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Sân Bóng 7" data-price="1200000" data-img="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Sân Bóng 11" data-price="5750000" data-img="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021">
            <img src="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021" alt="Product 3" />
            <h3>Sân Bóng 11</h3>
            <p>5.750.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Sân Bóng 11" data-price="5750000" data-img="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021">Thêm vào giỏ hàng</button>
        </li>
      </ul>
    </section>
  `;

  const productsContent2 = `
  <section class="product-list">
      <h2>Tất cả sản phẩm</h2>
      <ul>
        <li>
          <a href="#" class="product-link" data-product="Áo Real Madrid mùa 23/24" data-price="3800000" data-img="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg">
            <img src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg" alt="Product 1" />
            <h3>"Áo Real Madrid mùa 23/24"</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Real Madrid mùa 23/24" data-price="3800000" data-img="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Áo Borrussia Dortmund mùa 23/24" data-price="3800000" data-img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/" alt="Product 2" />
            <h3>Áo Borussia Dortmund mùa 23/24</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Borrussia Dortmund mùa 23/24" data-price="3800000" data-img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Áo Atalanta mùa 23/24" data-price="3800000" data-img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s" alt="Product 3" />
            <h3>Áo Atalanta mùa 23/24</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Atalanta mùa 23/24" data-price="3800000" data-img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s">Thêm vào giỏ hàng</button>
        </li>
      </ul>
    </section>
  `;
  const productsContent3 = `
<section class="product-list">
<h2>Sản phẩm nổi bật</h2>
<ul>
  <li>
    <a href="#" class="product-link" data-product="Giày NIKE MERCURIAL" data-price="500000" data-img="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg">
      <img src="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg" alt="Product 1" />
      <h3>Giày NIKE MERCURIAL</h3>
      <p>500.000 VND</p>
    </a>
    <button class="add-to-cart" data-product="Giày NIKE MERCURIAL" data-price="500000" data-img="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg">Thêm vào giỏ hàng</button>
  </li>
  <li>
    <a href="#" class="product-link" data-product="Giày COPA ADIDAS" data-price="1200000" data-img="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47">
      <img src="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47" alt="Product 2" />
      <h3>Giày COPA ADIDAS</h3>
      <p>1.200.000 VND</p>
    </a>
    <button class="add-to-cart" data-product="Giày COPA ADIDAS" data-price="1200000" data-img="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47">Thêm vào giỏ hàng</button>
  </li>
  <li>
    <a href="#" class="product-link" data-product="Giày MIZUNO NEO 3 PRO" data-price="3200000" data-img="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0">
      <img src="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0" alt="Product 3" />
      <h3>Giày MIZUNO NEO 3 PRO</h3>
      <p>3.200.000 VND</p>
    </a>
    <button class="add-to-cart" data-product="Giày MIZUNO NEO 3 PRO" data-price="3200000" data-img="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0">Thêm vào giỏ hàng</button>
  </li>
</ul>
</section>
`;
  const productsContent4 = `
<section class="product-list">
        <h2>Sản phẩm nổi bật</h2>
        <ul>
          <li>
            <a href="#" class="product-link" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1780000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg">
              <img src="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg" alt="Product 1" />
              <h3>BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY</h3>
              <p>1.780.000 VNĐ</p>
            </a>
            <button class="add-to-cart" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1780000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1.780.000 VNĐ" data-img="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png">
              <img src="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png" alt="Product 2" />
              <h3>Bóng đá FIFA Quality Pro SEA Games UHV 2.07 Victor</h3>
              <p>2.500.000 VNĐ</p>
            </a>
            <button class="add-to-cart" data-product="Bóng đá FIFA Quality Pro SEA Games UHV 2.07 Victor" data-price="2500000" data-img="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021" data-price="2490000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg">
              <img src="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg" alt="Product 3" />
              <h3>QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021</h3>
              <p>2.490.000 VND</p>
            </a>
            <button class="add-to-cart" data-product="QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021" data-price="2.490.000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg">Thêm vào giỏ hàng</button>
          </li>
        </ul>
      </section>
`;
  const productsContent = `
    <section class="product-list">
      <h2>Vé xem bóng</h2>
      <ul>
        <li>
          <a href="#" class="product-link" data-product="Vé Xem Bóng Đá" data-price="500000" data-img="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg">
            <img src="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg" alt="Product 1" />
            <h3>Vé Xem Bóng Đá</h3>
            <p>500.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Vé Xem Bóng Đá" data-price="500000" data-img="https://vff.org.vn/wp-content/uploads/2024/05/IMG_1864-960x576.jpeg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Sân Bóng 7" data-price="1200000" data-img="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg">
            <img src="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg" alt="Product 2" />
            <h3>Sân Bóng 7</h3>
            <p>1.200.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Sân Bóng 7" data-price="1200000" data-img="https://htsport.vn/wp-content/uploads/2019/12/25-kich-thuoc-san-bong-7-nguoi-2.jpg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Sân Bóng 11" data-price="5750000" data-img="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021">
            <img src="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021" alt="Product 3" />
            <h3>Sân Bóng 11</h3>
            <p>5.750.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Sân Bóng 11" data-price="5750000" data-img="https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021">Thêm vào giỏ hàng</button>
        </li>
      </ul>
    </section>

    <section class="product-list">
      <h2>áo đấu thể thao</h2>
      <ul>
        <li>
          <a href="#" class="product-link" data-product="Áo Real Madrid mùa 23/24" data-price="3800000" data-img="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg">
            <img src="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg" alt="Product 1" />
            <h3>"Áo Real Madrid mùa 23/24"</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Real Madrid mùa 23/24" data-price="3800000" data-img="https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2FRMCFMZ0127_01_952e1722-868a-4d90-9a92-a80d3a23fbc8.jpg%3Fv%3D1707138156&w=1200&q=50.jpg">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Áo Borrussia Dortmund mùa 23/24" data-price="3800000" data-img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/" alt="Product 2" />
            <h3>Áo Borussia Dortmund mùa 23/24</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Borrussia Dortmund mùa 23/24" data-price="3800000" data-img="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/770604/01/fnd/ARE/fmt/png/">Thêm vào giỏ hàng</button>
        </li>
        <li>
          <a href="#" class="product-link" data-product="Áo Atalanta mùa 23/24" data-price="3800000" data-img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s" alt="Product 3" />
            <h3>Áo Atalanta mùa 23/24</h3>
            <p>3.800.000 VND</p>
          </a>
          <button class="add-to-cart" data-product="Áo Atalanta mùa 23/24" data-price="3800000" data-img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBid8N0rLmwna__mcsKcbzMK1xtOSV2ZtihA&s">Thêm vào giỏ hàng</button>
        </li>
      </ul>
    </section>

    <section class="product-list">
        <h2>Giày thể thao</h2>
        <ul>
          <li>
            <a href="#" class="product-link" data-product="Giày NIKE MERCURIAL" data-price="500000" data-img="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg">
              <img src="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg" alt="Product 1" />
              <h3>Giày NIKE MERCURIAL</h3>
              <p>500.000 VND</p>
            </a>
            <button class="add-to-cart" data-product="Giày NIKE MERCURIAL" data-price="500000" data-img="https://thuhiensport.com/wp-content/uploads/2019/04/gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-nike.jpg">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="Giày COPA ADIDAS" data-price="1200000" data-img="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47">
              <img src="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47" alt="Product 2" />
              <h3>Giày COPA ADIDAS</h3>
              <p>1.200.000 VND</p>
            </a>
            <button class="add-to-cart" data-product="Giày COPA ADIDAS" data-price="1200000" data-img="https://cf.shopee.vn/file/2139178459b55184641d98b875335a47">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="Giày MIZUNO NEO 3 PRO" data-price="3200000" data-img="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0">
              <img src="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0" alt="Product 3" />
              <h3>Giày MIZUNO NEO 3 PRO</h3>
              <p>3.200.000 VND</p>
            </a>
            <button class="add-to-cart" data-product="Giày MIZUNO NEO 3 PRO" data-price="3200000" data-img="https://th.bing.com/th/id/R.cadebb5a3a1407fe2fe2cde221e72746?rik=7uzSmvGxjQ0CLg&riu=http%3a%2f%2fwww.nhuansport.vn%2fuploads%2fsource%2fgiay-mizuno%2fmizuno-trang-logo-do-tf-(4).jpg&ehk=dSLoT%2f4CrEyTsPWTBpeV0kFM149hgH9OZvzASvdQ5FI%3d&risl=&pid=ImgRaw&r=0">Thêm vào giỏ hàng</button>
          </li>
        </ul>
      </section>

      <section class="product-list">
        <h2>Bóng</h2>
        <ul>
          <li>
            <a href="#" class="product-link" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1780000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg">
              <img src="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg" alt="Product 1" />
              <h3>BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY</h3>
              <p>1.780.000 VNĐ</p>
            </a>
            <button class="add-to-cart" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1780000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20230407_T4tiMiqxkB.jpeg">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="BÓNG ĐÁ FIFA QUALITY PRO UHV 2.07 GALAXY" data-price="1.780.000 VNĐ" data-img="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png">
              <img src="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png" alt="Product 2" />
              <h3>Bóng đá FIFA Quality Pro SEA Games UHV 2.07 Victor</h3>
              <p>2.500.000 VNĐ</p>
            </a>
            <button class="add-to-cart" data-product="Bóng đá FIFA Quality Pro SEA Games UHV 2.07 Victor" data-price="2500000" data-img="https://product.hstatic.net/1000288768/product/1_8ee480aac0bc4d78af825a10d2b55d52_master.png">Thêm vào giỏ hàng</button>
          </li>
          <li>
            <a href="#" class="product-link" data-product="QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021" data-price="2490000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg">
              <img src="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg" alt="Product 3" />
              <h3>QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021</h3>
              <p>2.490.000 VND</p>
            </a>
            <button class="add-to-cart" data-product="QUẢ BÓNG ĐÁ MOLTEN EUROPA LEAGUE 2021" data-price="2.490.000" data-img="https://pos.nvncdn.com/b0b717-26181/ps/20210311_jZYAiv66Vkmau7ZWs1Mz9RNk.jpg">Thêm vào giỏ hàng</button>
          </li>
        </ul>
      </section>

  `;

  const aboutContent = `
  <div class="container">
    <h1>VỀ CHÚNG TÔI</h1>
    <div id="slide">
      <div class="item" style="background-image: url(./images/ten-hag.jpg)">
        <div class="content">
          <div class="name">Phạm Thế Hùng</div>
          <div class="from">CEO & Founder</div>
          <div class="type">Electric Power University</div>
        </div>
      </div>

      <div
        class="item"
        style="background-image: url(./images/garnacho.jpg)"
      >
        <div class="content">
          <div class="name">Lê Tuấn Anh</div>
          <div class="from">Marketing Manager</div>
          <div class="type">Electric Power University</div>
        </div>
      </div>

      <div class="item" style="background-image: url(./images/antony-9474.jpg.webp)">
        <div class="content">
          <div class="name">Phạm Như khải</div>
          <div class="from">Marketing Manager</div>
          <div class="type">Electric Power University</div>
        </div>
      </div>

      <div class="item" style="background-image: url(./images/onana.jpg)">
        <div class="content">
          <div class="name">Phạm Quang Thắng</div>
          <div class="from">Marketing Manager</div>
          <div class="type">Electric Power University</div>
        </div>
      </div>

      <div class="item" style="background-image: url(./images/maguire.jpg)">
        <div class="content">
          <div class="name">Trần Nhật Quân</div>
          <div class="from">Marketing Manager</div>
          <div class="type">Electric Power University</div>
        </div>
      </div>
    <div class="buttons">
      <button id="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button id="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
  `;

  const contactContent = `
    <section class="contact">
    <div class="container1">
    <h1>Liên hệ với chúng tôi</h1>
    <p>Số điện thoại liên hệ hỗ trợ</p>
    <p>Email hỗ trợ: support@gmail.com</p>
    <p>Địa chỉ văn phòng:</p>
    <p>Thời gian làm việc</p>
    <ul>
      <li>Thứ Hai - Thứ Sáu: 8:00 - 17:00</li>
      <li>Thứ Bảy : 9:00 - 12:00</li>
      <li>Chủ Nhật: Nghỉ</li>
    </ul>
    <div class="social-media">
      <p>kết nối với chúng tôi</p>
      <a href="facebook.com">
        <i class="fa-brands fa-square-facebook"></i>facebook</a
      >
    </div>
    <form id="contactform">
      <div class="form-group">
        <label for="name">Tên của bạn:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email của bạn:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Số điện thoại của bạn:</label>
        <input type="text" id="phone" name="phone" />
      </div>
      <div class="form-group">
        <label for="message">Nội dung:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Gửi yêu cầu</button>
      </div>
    </form>
    <div id="successMessage" class="alert success">
      <span class="closebtn">&times;</span>
      Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm.
    </div>
    <div id="errorMessage" class="alert">
      <span class="closebtn">&times;</span>
      Đã xảy ra lỗi, vui lòng thử lại sau.
    </div>
    <div class="testimonials">
      <h2>Phản hồi từ khách hàng</h2>
      <p>"Dịch vụ tuyệt vời, tôi rất hài lòng!" - Khách hàng A</p>
      <p>"Giao hàng nhanh chóng và sản phẩm chất lượng." - Khách hàng B</p>
      <p>"Nhân viên hỗ trợ nhiệt tình và chuyên nghiệp." - Khách hàng C</p>
    </div>
  </div>
    </section>
  `;
  const cartContent = () => {
    let cartItems = "";
    let total = 0;
    if (cart.length === 0) {
      cartItems = "<li>Giỏ hàng của bạn hiện đang trống.</li>";
    } else {
      cart.forEach((item, index) => {
        cartItems += `
          <li>
            <img src="${item.img}" alt="${item.name}" width="50">
            <span>${item.name} - ${item.price.toLocaleString()} VND</span>
            <span>Số lượng: ${item.quantity}</span>
            <button class="remove-from-cart" data-index="${index}">Xóa</button>
          </li>
        `;
        total += item.price * item.quantity;
      });
    }
    return `
      <section class="cart">
        <h2>Giỏ hàng</h2>
        <ul>
          ${cartItems}
        </ul>
        <p>Tổng: ${total.toLocaleString()} VND</p>
        ${
          cart.length > 0
            ? '<button id="checkout-button">Thanh toán</button>'
            : ""
        }
        <button id="continue-shopping-button">Quay lại mua sắm</button>
      </section>
    `;
  };

  const productDetailsContent = (productName, productPrice, productImg) => {
    return `
      <section class="product-details">
        <h2>${productName}</h2>
        <img src="${productImg}" alt="${productName}" />
        <p>Giá: ${productPrice.toLocaleString()} VND</p>
        <button class="add-to-cart" data-product="${productName}" data-price="${productPrice}" data-img="${productImg}">Thêm vào giỏ hàng</button>
        <button id="back-to-products">Quay lại sản phẩm</button>
      </section>
    `;
  };

  const updateContent = (content) => {
    mainContent.innerHTML = content;
    attachProductLinkListeners();
    attachProductsLinkListeners();
    attachProductsLinkListeners1();
    attachProductsLinkListeners2();
    attachProductsLinkListeners3();
    attachAddToCartListeners();
  };

  const updateCart = () => {
    cartCountElement.textContent = cartCount;
  };

  const attachAddToCartListeners = () => {
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        const productPrice = parseInt(button.getAttribute("data-price"));
        const productImg = button.getAttribute("data-img");

        const existingProduct = cart.find((item) => item.name === productName);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1,
          });
        }
        cartCount += 1;
        updateCart();
        alert(`${productName} đã được thêm vào giỏ hàng.`);
      });
    });
  };

  const attachProductLinkListeners = () => {
    if (document.querySelectorAll(".product-link"))
      document.querySelectorAll(".product-link").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const productName = link.getAttribute("data-product");
          const productPrice = parseInt(link.getAttribute("data-price"));
          const productImg = link.getAttribute("data-img");
          updateContent(
            productDetailsContent(productName, productPrice, productImg)
          );
          document
            .querySelector("#back-to-products")
            .addEventListener("click", () => {
              updateContent(productsContent);
            });
          attachAddToCartListeners();
        });
      });
  };

  const attachProductsLinkListeners = () => {
    if (document.querySelector("#soccer-service")) {
      document
        .querySelector("#soccer-service")
        .addEventListener("click", () => {
          updateContent(productsContent1);
        });
      attachAddToCartListeners();
    }
  };
  const attachProductsLinkListeners1 = () => {
    if (document.querySelector("#soccer-clothes")) {
      document
        .querySelector("#soccer-clothes")
        .addEventListener("click", () => {
          updateContent(productsContent2);
        });
      attachAddToCartListeners();
    }
  };
  const attachProductsLinkListeners2 = () => {
    if (document.querySelector("#soccer-shoes")) {
      document.querySelector("#soccer-shoes").addEventListener("click", () => {
        updateContent(productsContent3);
      });
      attachAddToCartListeners();
    }
  };
  const attachProductsLinkListeners3 = () => {
    if (document.querySelector("#soccer-a")) {
      document.querySelector("#soccer-a").addEventListener("click", () => {
        updateContent(productsContent4);
      });
      attachAddToCartListeners();
    }
  };
  const attachRemoveFromCartListeners = () => {
    document.querySelectorAll(".remove-from-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        const removedItem = cart.splice(index, 1)[0];
        cartCount -= removedItem.quantity;
        updateCart();
        updateContent(cartContent());
        attachRemoveFromCartListeners();
      });
    });
  };

  document.querySelector("#home-nav").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(homeContent);
  });

  document.querySelector("#products-nav").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(productsContent);
  });

  document.querySelector("#about-nav").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(aboutContent);

    document.getElementById("next").addEventListener("click", (event) => {
      event.preventDefault();
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    });
    document.getElementById("prev").addEventListener("click", (event) => {
      event.preventDefault();
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    });
  });

  document.querySelector("#contact-nav").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(contactContent);
  });

  document.querySelector("#cart-nav").addEventListener("click", (event) => {
    event.preventDefault();
    updateContent(cartContent());
    attachRemoveFromCartListeners();
    if (document.querySelector("#checkout-button")) {
      document
        .querySelector("#checkout-button")
        .addEventListener("click", () => {
          alert("Thanh toán thành công!");
          cart.length = 0;
          cartCount = 0;
          updateCart();
          updateContent(cartContent());
        });
    }
    document
      .querySelector("#continue-shopping-button")
      .addEventListener("click", (event) => {
        event.preventDefault();
        updateContent(productsContent);
      });
  });

  // Load initial content
  updateContent(homeContent);
});
