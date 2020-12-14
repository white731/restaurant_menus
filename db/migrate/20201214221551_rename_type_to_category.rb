class RenameTypeToCategory < ActiveRecord::Migration[6.0]
  def change
    rename_column :eateries, :type, :category
    rename_column :menus, :type, :category
  end
end
