class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :email, nulL:false 
      t.string :password_digeset, null:false 
      t.string :session_token, null:false 
      t.timestamps
    end
    add_index :users, [:username, :session_token], unique: true 
  end
end
