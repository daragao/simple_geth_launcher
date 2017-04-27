#!/bin/bash

DEFAULT_NODE_NUMBER=1
NODE_NUMBER=${1:-$DEFAULT_NODE_NUMBER}
GETH_CMD=../go-ethereum/build/bin/geth
DATA_DIR="data_node$NODE_NUMBER"
IPC_PATH=$DATA_DIR/geth.ipc
REMAINING_ARGS=${@:2}

if ! [ -d "$DATA_DIR" ]
then
	echo "Datadir does not exist!"
	exit 1
elif ! [ -r "$IPC_PATH" ]
then
	echo "IPC file does not exist!"
	exit 1
fi	

$GETH_CMD \
	attach \
	ipc:$IPC_PATH \
	$REMAINING_ARGS

