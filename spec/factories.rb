FactoryGirl.define do
  factory :user do
    name        "Luis Torres"
    email       "luis@dreamfactorypr.com"
    password    "foobar"
    password_confirmation "foobar"
  end
end