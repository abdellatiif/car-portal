require 'test_helper'

class CarBrandsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @car_brand = car_brands(:one)
  end

  test "should get index" do
    get car_brands_url, as: :json
    assert_response :success
  end

  test "should create car_brand" do
    assert_difference('CarBrand.count') do
      post car_brands_url, params: { car_brand: { name: @car_brand.name, post_id: @car_brand.post_id } }, as: :json
    end

    assert_response 201
  end

  test "should show car_brand" do
    get car_brand_url(@car_brand), as: :json
    assert_response :success
  end

  test "should update car_brand" do
    patch car_brand_url(@car_brand), params: { car_brand: { name: @car_brand.name, post_id: @car_brand.post_id } }, as: :json
    assert_response 200
  end

  test "should destroy car_brand" do
    assert_difference('CarBrand.count', -1) do
      delete car_brand_url(@car_brand), as: :json
    end

    assert_response 204
  end
end
