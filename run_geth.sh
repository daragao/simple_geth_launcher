#!/bin/bash

echo "STARTING NODE:"

DEFAULT_NODE_NUMBER=1
NODE_NUMBER=${1:-$DEFAULT_NODE_NUMBER}
GETH_CMD=../go-ethereum/build/bin/geth
KEYSTORE_DIR=keystore
DATA_DIR="data_node$NODE_NUMBER"
PORT_BASE=$((30300+$NODE_NUMBER))
RPC_PORT_BASE=$((8100+$NODE_NUMBER))
IPC_PATH=$DATA_DIR/geth.ipc
IPC_API="admin,debug,eth,miner,net,personal,shh,txpool,web3"
GENESIS_FILE=genesis.json
BOOTNODES="enode://f6cab959526217ff25a227d809d2505686b009ee2c41324c8bacf0089e0d48e284bc967bb25a31c154316bd8aab6c27425292a02cd032b29192ae1462dd1914c@127.0.0.1:30301\
,enode://6860fa9c5cad3a882a23037fa72b7b22fce3407f16ad5624b95913423cf18286b52f39c67b83a1a3ace6560040ff183959859dcbe31137a3633b1f2feb5090b8@127.0.0.1:30302"

REMAINING_ARGS=${@:2}

#CMD="$GETH_CMD --keystore=$KEYSTORE_DIR --datadir=$DATA_DIR \
#--verbosity 6 --ipcdisable --port $PORT_BASE --rpcport $RPC_PORT_BASE \
#--bootnodes=$BOOTNODES --mine $REMAINING_ARGS"
#--mine" console 2>> node$NODE_NUMBER.log"

#echo $CMD
#echo $REMAINING_ARGS 
#eval $CMD

if ! [ -d "$DATA_DIR" ]
then
	echo "Creating new datadir..."
	$GETH_CMD --keystore=$KEYSTORE_DIR --datadir=$DATA_DIR init $GENESIS_FILE
fi	

# --verbosity 6 \
# --ipcdisable \
$GETH_CMD \
	--keystore=$KEYSTORE_DIR \
	--datadir=$DATA_DIR \
	--port $PORT_BASE \
	--ipcpath $IPC_PATH \
	--rpcport $RPC_PORT_BASE \
	--bootnodes=$BOOTNODES \
	--mine \
	$REMAINING_ARGS
